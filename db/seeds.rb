# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

#generate a base user and channel to confirm follow relationships

User.create!(
  username: "DemoUser",
  password: 123456,
  email: Faker::Internet.email 
)

Channel.create!(
  owner_id: 1,
    channel_name: "DemoUser"
    channel_description: Faker::Quote.famous_last_words
)

# generate 10 additional users and channels
(1..10).each do |id|
  username = Faker::Esport.player + Faker::Creature::Bird.common_family_name
  User.create!(
    username: username,
    password: 123456,
    email: Faker::Internet.email 
  )
  Channel.create!(
    owner_id: id,
    channel_name: username
    channel_description: Faker::Quote.famous_last_words
  )
end


#Have the additional users follow the DemoUser