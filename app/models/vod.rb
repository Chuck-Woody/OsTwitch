class Vod < ApplicationRecord

  validates :channel_id, :title, :category, presence: true

  belongs_to :channel,
  primary_key: :id,
  foreign_key: :channel_id,
  class_name: :Channel
end