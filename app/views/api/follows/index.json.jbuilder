@user.follows.each do |follow|
  json.extract! follow, :id, :channel_id, :follower_id
end