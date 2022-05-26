class User < ApplicationRecord

  attr_reader :password

  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  after_initialize :ensure_session_token
  
  has_many :messages
  # a user has one channel
  has_one :channel,
  primary_key: :id,
  foreign_key: :owner_id,
  class_name: :Channel

# a user has many follows
  has_many :follows,
  primary_key: :id,
  foreign_key: :follower_id,
  class_name: :Follow

  has_many :followed_channels,
  through: :follows,
  source: :channel_followed

  # follow a channel
  def follow(channel)
    follows.create( channel_id: channel.id)
  end
  # unfollow a channel
  def unfollow(channel)
    follows.find_by( channel_id: channel.id).destroy
  end
  # Returns true if the current user is following the channel
  def following_channel?(channel)
    follows.include?(channel)
  end


  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    generate_unique_session_token
    save!
    self.session_token
  end

  private

  def ensure_session_token
    generate_unique_session_token unless self.session_token
  end

  def new_session_token
    SecureRandom.urlsafe_base64
  end

  def generate_unique_session_token
    self.session_token = new_session_token
    while User.find_by(session_token: self.session_token)
      self.session_token = new_session_token
    end
    self.session_token
  end
  
end
