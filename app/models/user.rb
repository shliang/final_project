class User < ActiveRecord::Base
  attr_reader :password
  
  before_validation :ensure_session_token 
  
  validates :username, :digested_password, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true } 
  validates :username, :session_token, uniqueness: true
  
  
  has_many(
    :posts,
    class_name: "Post",
    foreign_key: :owner_id,
    primary_key: :id
  )
  
  has_many(
    :followees,
    through: :user_follows, 
    source: :followee
  )
  
  has_many(
    :user_follows,
    class_name: "UserFollow",
    foreign_key: :follower_id,
    primary_key: :id
  )
  
  def is_already_following?(followee) #followee is an object
    user.followees.include?(followee)
  end
  
  def password=(plain_password)
    @password = plain_password
    self.digested_password = BCrypt::Password.create(plain_password)
  end
  
  
  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)
    return nil if user.nil?
    
    passowrd_object =  BCrypt::Password.new(user.digested_password)
    
    return user if passowrd_object.is_password?(password)

  end
    
  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64(16)
  end
  
  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64(16)
    self.save!
    return self.session_token
  end
  
end