class Follow < ApplicationRecord

  validates :channel_id, :user_id, presence: true 
  validates :followed_id, uniqueness: { scope: :user_id } # makes sure that you can only follow one channel at a time
  
  belongs_to :channel_followed,
  primary_key: :id,
  foreign_key: :channel_id,
  class_name: :Channel

  belongs_to :follower,
  primary_key: :id,
  foreign_key: :follower_id,
  class_name: :User

  
 
end
