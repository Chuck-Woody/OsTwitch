json.user do 
  json.extract! user, :id, :username
  json.follows user.followed_channel_ids # literal magic
end

json.channels do
  user.followed_channels.each do |followed_channel|
    json.set! followed_channel.id do
      json.extract! followed_channel, :channel_name,:channel_description,:owner_id,:id
    end
  end
end


# the root.html.erb is accessing this page
# the result of these two groups 