# frozen_string_literal: true

module ApplicationHelper
  # Generate page titles.
  def yield_for_title(default)
    content_for?(:title) ? content_for(:title) : default
  end

  def user_leads_a_group?
    current_user.memberships.each do |m|
      return true if m.level == Membership::LEVELS[:leader]
    end
    false
  end

  def help_link(page_name)
    link_to controller: :pages, action: :show, id: page_name do
      content_tag(:span, '', class: 'fas fa-question-circle').html_safe
    end
  end

  # Render the partial at the specified path if it exists within
  # the lookup_context, otherwise render the partial specified in default
  # if it exists.
  # Locals are passed along accordingly.
  def render_partial_if(partial, default = nil, locals = {})
    if lookup_context.exists?(partial, [], true)
      render(partial:, locals:)
    elsif default.present?
      render partial: default, locals:
    end
  end

  # render tooltip
  def tooltip_tag(tip, text = nil, options = nil)
    results = []
    results << "#{content_tag(:span, text, options)} " if !text.nil? && text.present?
    results << content_tag(:i, nil,
                           { class: 'fas fa-question-circle muted tooltip-basic', data: { tooltip_text: tip } })
    results.join.html_safe
  end

  # render the label and the toolip beside it (passed in the options as :tip)
  def label_tooltip(object_name, method, content_or_options = nil, options = nil)
    label object_name, method do
      concat("#{content_or_options} ") if !content_or_options.nil? && content_or_options.present?
      concat(tooltip_tag(options[:tip])) if !options.nil? && options.key?(:tip) && options[:tip].present?
    end
  end

  # Generate an <a> link tag that submits a Rails form,
  # instead of having to always use inputs or buttons.
  def link_to_submit(*args, &)
    link_to_function (block_given? ? capture(&) : args[0]), "$(this).closest('form').submit()",
                     args.extract_options!
  end

  def link_to_function(name, function, html_options = {})
    onclick = "#{"#{html_options[:onclick]}; " if html_options[:onclick]}#{function}; return false;"
    href = html_options[:href] || '#'

    content_tag(:a, name, html_options.merge(href:, onclick:))
  end
end
