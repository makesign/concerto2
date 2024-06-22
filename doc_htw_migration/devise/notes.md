

# AAARGH! sie haben eine eigene authentifizierungslogik, siehe zb 
feeds controller:

def index
if !ConcertoConfig[:public_concerto] && current_user.nil?
run_callbacks :auth_plugin
if @auth_url.nil?
# no auth plugin detected, use default login
redirect_to(new_user_session_path)
else
# use custom plugin authentication
redirect_to(@auth_url)
end
end

    @motd = ConcertoConfig.get(:motd_html)
    @feeds = Feed.accessible_by(current_ability).roots
end