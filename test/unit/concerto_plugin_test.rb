# frozen_string_literal: true

require 'test_helper'

class ConcertoPluginTest < ActiveSupport::TestCase
  test 'check sources' do
    skip 'htw_migration: failing test' if SKIP_HTW_MIGRATION
    # note: this tests stalls, probably because gem download is switched off
    # a duplicate rubygem
    p = ConcertoPlugin.new(gem_name: 'concerto_weather', source: 'rubygems')
    assert !p.valid?
    # not a valid rubygem
    p = ConcertoPlugin.new(gem_name: 'concerto_invalidgem', source: 'rubygems')
    assert !p.valid?

    # not a valid git
    # some of these prompt for a github account, so they're commented out until I can find a solution
    # p = ConcertoPlugin.new(:gem_name => 'concerto_weather', :source => 'git',
    #   :source_url => 'http://github.com/concerto/concerto-weather.git')
    # assert p.valid?
    p = ConcertoPlugin.new(gem_name: 'concerto_invalidgem', source: 'git',
                           source_url: '')
    assert !p.valid?
    # p = ConcertoPlugin.new(:gem_name => 'concerto_invalidgem', :source => 'git',
    #   :source_url => 'http://github.com/concerto/concerto_invalidgem.git')
    # assert !p.valid?

    # path
    p = ConcertoPlugin.new(gem_name: 'concerto_invalidgem', source: 'path',
                           source_url: '')
    assert !p.valid?
    p = ConcertoPlugin.new(gem_name: 'concerto_invalidgem', source: 'path',
                           source_url: '../concerto_invalidgem.invalid_path')
    assert !p.valid?
  end
end
