class Follow < ApplicationRecord

  validates :channel_id, :follower_id, presence: true 
  validates :follower_id, uniqueness: { scope: :channel_id } # makes sure that you can only follow one channel at a time
  # may need to swap follower_id and channel_id in line 4
  belongs_to :channel_followed,
  primary_key: :id,
  foreign_key: :channel_id,
  class_name: :Channel

  belongs_to :follower,
  primary_key: :id,
  foreign_key: :follower_id,
  class_name: :User

  
 
end
