# frozen_string_literal: true

require 'English'
class ConcertoPluginsController < ApplicationController
  respond_to :html, :json

  # GET /concerto_plugins
  # GET /concerto_plugins.json
  def index
    authorize! :read, ConcertoPlugin
    @concerto_plugins = ConcertoPlugin.all
    respond_with(@concerto_plugins)
  end

  # GET /concerto_plugins/1
  # GET /concerto_plugins/1.json
  def show
    @concerto_plugin = ConcertoPlugin.find(params[:id])
    @gemspec = Gem.loaded_specs[@concerto_plugin.gem_name]
    auth!
    @rubygems_current_version = @concerto_plugin.rubygems_current_version
    respond_with(@concerto_plugin)
  end

  # GET /concerto_plugins/1/upgradeable
  # GET /concerto_plugins/1/upgradeable.json
  def upgradeable
    concerto_plugin = ConcertoPlugin.find(params[:id])
    auth!

    @gemspec = Gem.loaded_specs[concerto_plugin.gem_name]
    @upgradeable = !@gemspec.nil? && !concerto_plugin.rubygems_current_version.nil? && (Gem::Version.new(concerto_plugin.rubygems_current_version.to_s) > Gem::Version.new(@gemspec.version.to_s))

    render json: { upgradeable: @upgradeable, description: @gemspec ? @gemspec.description : '' }
  end

  # GET /concerto_plugins/new
  # GET /concerto_plugins/new.json
  def new
    @concerto_plugin = ConcertoPlugin.new
    auth!
    respond_with(@concerto_plugin)
  end

  # GET /concerto_plugins/1/edit
  def edit
    @concerto_plugin = ConcertoPlugin.find(params[:id])
    auth!
  end

  # POST /concerto_plugins
  # POST /concerto_plugins.json
  def create
    @concerto_plugin = ConcertoPlugin.new(concerto_plugin_params)
    @concerto_plugin.enabled = true
    auth!
    if @concerto_plugin.save
      process_plugin_notification
      # if boot.rb found a "frozen" bundler environment, don't try to write the Gemfile or bundle install
      if ENV['FROZEN'] == '1'
        flash[:notice] = t(:plugin_created_frozen_env)
      else
        write_Gemfile
        rake_precompile
        restarted = restart_webserver
      end
      flash[:notice] = t(:plugin_created) if restarted
      redirect_to concerto_plugins_path
    else
      respond_with(@concerto_plugin)
    end
  end

  # PUT /concerto_plugins/1
  # PUT /concerto_plugins/1.json
  def update
    @concerto_plugin = ConcertoPlugin.find(params[:id])
    auth!
    if @concerto_plugin.update(concerto_plugin_params)
      process_plugin_notification
      if ENV['FROZEN'] == '1'
        flash[:notice] = t :plugin_updated_frozen_env
      else
        write_Gemfile
        flash[:notice] = t(:plugin_updated)
      end
      redirect_to concerto_plugins_path
    else
      respond_with(@concerto_plugin)
    end
  end

  def process_plugin_notification
    process_notification(@content, {}, process_notification_options({
                                                                      params: {
                                                                        concerto_plugin_gem_name: @concerto_plugin.gem_name
                                                                      }
                                                                    }))
  end

  # DELETE /concerto_plugins/1
  # DELETE /concerto_plugins/1.json
  def destroy
    @concerto_plugin = ConcertoPlugin.find(params[:id])
    auth!

    process_plugin_notification
    @concerto_plugin.destroy
    if ENV['FROZEN'] == '1'
      flash[:notice] = t(:plugin_removed_frozen_env)
    else
      write_Gemfile
      restarted = restart_webserver
    end
    flash[:notice] = t(:plugin_removed) if restarted
    redirect_to concerto_plugins_path
  end

  def update_gem
    results = {}
    plugin = ConcertoPlugin.find(params[:id])
    # Todo (see issue #) - das machen wir mal einfach nicht.
    # results[:bundle_output] = `bundle update --source #{plugin.gem_name} 2>&1`
    results[:bundle_success] = $CHILD_STATUS.success?

    if results[:bundle_success]
      results[:rake_output] = `bundle exec rake assets:precompile 2>&1` # rake_precompile()
      results[:rake_success] = $CHILD_STATUS.success?
      restarted = restart_webserver
      if restarted
        results[:notice] = t(:plugin_updated)
        flash[:notice] = t(:plugin_updated)
      end
      results[:redirect_to] = concerto_plugin_path(plugin)
    end
    render json: results
  end

  def write_Gemfile
    # slurp in the old Gemfile and write it to a backup file for use in config.ru
    old_gemfile = File.read('Gemfile-plugins')
    File.write('Gemfile-plugins.bak', old_gemfile)

    # start a big string to put the Gemfile contents in until it's written to the filesystem
    gemfile_content = ''
    ConcertoPlugin.find_each do |plugin|
      gem_args = []
      gem_args << "\"#{plugin.gem_name}\""

      gem_args << "\"#{plugin.gem_version}\"" if plugin.gem_version.present?

      gem_args << "git: \"#{plugin.source_url}\"" if (plugin.source == 'git') && plugin.source_url.present?

      gem_args << "path: \"#{plugin.source_url}\"" if (plugin.source == 'path') && plugin.source_url.present?

      gemfile_content = "#{gemfile_content}\ngem #{gem_args.join(', ')}\n"
    end

    File.write('Gemfile-plugins', gemfile_content)
  end

  private

  # Restrict the allowed parameters to a select set defined in the model.
  def concerto_plugin_params
    params.require(:concerto_plugin).permit(:source, :gem_name, :source_url, :enabled, :gem_version)
  end
end
