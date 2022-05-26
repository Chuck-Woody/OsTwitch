# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'
# if you want to add temporary profile icons for your site you can use https://robohash.org/
User.destroy_all
Channel.destroy_all
Follow.destroy_all
ApplicationRecord.connection.reset_pk_sequence!('users')
ApplicationRecord.connection.reset_pk_sequence!('channels')
ApplicationRecord.connection.reset_pk_sequence!('follows')
#generate a base user and channel to confirm follow relationships
User.create!(
  username: "DemoUser",
  password: 123456,
  email: "DemoUser@email.com"
)
Channel.create!(
    owner_id: 1,
    channel_name: "DemoUser",
    channel_description: Faker::Quote.famous_last_words
)

# generate 10 additional users and channels
(2..11).each do |id|
  username = Faker::Esport.unique.player + Faker::Creature::Bird.common_name
  username = username.gsub(" ","_")
  User.create!(
    username: username,
    password: 123456,
    email: Faker::Internet.email 
  )
  Channel.create!(
    owner_id: id,
    channel_name: username,
    channel_description: Faker::Quote.famous_last_words
  )
end


#Have the additional users follow the DemoUser

users = User.all
demoUser = users.first

# the 5 users that the demo user is following
following = users[1..-1].sample(5)
# the 5 users that follow the demo user
followers =  users[1..-1].sample(5)

following.each do |followed| 
  demoUser.follow(followed.channel)
end

followers.each do |follower|
  follower.follow(demoUser.channel)
end