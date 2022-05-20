class Channel < ApplicationRecord

# a channel must have an owner
  validates :owner_id, presence: true 

# a channel has many follows
  has_many :follows,
  primary_key: :id,
  foreign_key: :follower_id,
  class_name: :Follow

# a channel has many followers through the follows association
# the identity of those followers is known through the follower belongs_to
  has_many :followers,
  through: :follows,
  source: :follower

# a channel belongs to an owner
  belongs_to :owner,
  foreign_key: :owner_id,
  class_name: :User
end
