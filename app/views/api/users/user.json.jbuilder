json.user do 
  json.extract! @user, :id, :username
  json.follows @user.followed_channel_ids # 
  #
end

json.channels do
  @user.followed_channels.each do |followed_channel|
    json.set! followed_channel.id do
      json.extract! followed_channel, :channel_name,:channel_description,:owner_id,:id
    end
  end
end


# instead of making a backend endpoint what was done here
# is that we used user associations to get the data into one endpoint
# namely we put the data we wanted into /api/users/user.json.jbuilder
# check out the root.html.erb file