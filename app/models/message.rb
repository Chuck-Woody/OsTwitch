class Message < ApplicationRecord
  validates :body, null:false
  belongs_to :user
  belongs_to :channel
end
