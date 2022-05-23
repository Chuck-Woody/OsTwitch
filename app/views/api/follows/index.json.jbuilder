

json.array!(@user.follows) do |follow|
  json.set! follow.id do
    json.follower_id follow.follower_id
    json.channel_id  follow.channel_id
  end
end