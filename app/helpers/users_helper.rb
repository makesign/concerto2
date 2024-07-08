# frozen_string_literal: true

module UsersHelper
  # also used in contents view
  def possessive(name)
    name + (name[-1, 1] == 's' ? "'" : "'s")
  end

  def user_title(_user, model)
    [current_user == @user ? t('users.show_body.my') : possessive(@user.first_name), model].join ' '
  end
end
