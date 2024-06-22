# create user:

u = User.new(email: "kleinen@infrastructure.de", password: "geheim12", password_confirmation: "geheim12", first_name: "Barne", last_name: "Kleinen", is_admin: true)
u.confirmed_at = Date.today
u.receive_moderation_notifications = true
u.save
