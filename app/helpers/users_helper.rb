module UsersHelper
  # also used in contents view
  def possessive( name )
    name + ('s' == name[-1,1] ? "'" : "'s" )
  end

  def user_title( user, model)
    [current_user == @user? t('users.show_body.my') : possessive(@user.first_name), model].join ' '
  end
end
