# frozen_string_literal: true

# The PluginInfo class is instantiated in each Concerto Plugin
# so that it can share information about itself with the main
# Concerto Application.
#
# The methods provide below provide a two-way API: a set of
# methods to be called within the Engine class to configure
# callbacks and the like; and a set of methods to be called
# by the ConcertoPlugin model when interfacing to the rest of
# the Concerto application.

module Concerto
  class PluginInfo
    # These instance variables will be set by the configuration
    # API, but readable from the main application.
    attr_reader :controller_hooks
    attr_reader :view_hooks, :mount_points, :configs, :init_block, :model_extensions, :cron_jobs, :header_tags

    # Configuration API: Accessible by the engine via "new"

    # Provide a convenient way for the engine to configure plugin
    # settings using the methods provided below.
    def initialize(&block)
      instance_exec(&block)
    end

    private # the following methods will be accessed via instance_exec

    # Requests that the plugin be mounted as a rack app at
    #   Rails.root/url_string
    # Usually there will only be one per plugin, but hey, we're flexible.
    # The plugin is responsible for setting its own engine name.
    def add_route(url_string, rack_app)
      @mount_points ||= []
      @mount_points << { url_string:, rack_app: }
    end

    # Add a configuration item to the database for this plugin
    def add_config(config_key, config_value, options)
      @configs ||= []
      @configs << { config_key:,
                    config_value:,
                    options: }
    end

    # Set some code to run when the app first boots up,
    # if the plugin is enabled.
    def init(&block)
      @init_block = block
    end

    # Add a hook into a callback in the given controller.
    def add_controller_hook(controller_name, name, filter_list, &block)
      @controller_hooks ||= []
      @controller_hooks << {
        controller_name:,
        name:,
        filter_list:,
        block:
      }
    end

    # Add code into the main application's UI where a hook has been
    # defined. The hook may take a number of forms, including static
    # text, a partial, or a code block for later execution.
    def add_view_hook(controller_name, hook_sym, options = {})
      @view_hooks ||= []
      if options.key? :partial
        mytype = :partial
        myhook = options[:partial]
      elsif options.key? :text
        mytype = :text
        myhook = options[:text]
      elsif options.key? :proc
        mytype = :proc
        myhook = options[:proc]
      elsif block_given?
        mytype = :proc
        myhook = Proc.new # takes the value of the passed block
      elsif !hook
        raise 'error: add_view_hook missing a block, partial, or text!'
      end

      @view_hooks << {
        controller_name:,
        sym: hook_sym,
        type: mytype,
        hook: myhook
      }
    end

    # Add code into the main application's header.
    # The hook may take a number of forms, including static
    # text, a partial, or a code block for later execution.
    def add_header_tags(options = {})
      @header_tags ||= []
      if options.key? :partial
        type = :partial
        hook = options[:partial]
      elsif options.key? :text
        type = :text
        hook = options[:text]
      elsif options.key? :proc
        type = :proc
        hook = options[:proc]
      elsif block_given?
        type = :proc
        hook = Proc.new # takes the value of the passed block
      else
        raise 'error: add_header_tags missing a block, partial, or text!'
      end

      @header_tags << {
        type:,
        hook:
      }
    end

    # Extend the given model by including a ActiveSupport::Concern
    def extend_model(model, extension)
      @model_extensions ||= {}
      @model_extensions[model] ||= []
      @model_extensions[model] << extension
    end

    def perform_job_every(period, job_name, options = {}, &block)
      @cron_jobs ||= []
      @cron_jobs << {
        period:,
        name: job_name,
        options:,
        block:
      }
    end

    # Info Reading API
    # Accessed by ConcertoPlugin in the main application
    public

    # Returns an array of hashes specifying all of the requested
    # hooks into the given controller.
    def get_controller_hooks(controller_name)
      return unless @controller_hooks

      @controller_hooks.select do |h|
        h[:controller_name] == controller_name
      end
    end

    # Returns an array of hashes specifying all of the requested
    # includes for the given hook.
    def get_view_hooks(controller_name, hook_sym)
      hooks = []
      @view_hooks&.each do |hook|
        hooks << hook if (hook[:controller_name] = controller_name) && (hook[:sym] == hook_sym)
      end
      hooks
    end
  end
end
