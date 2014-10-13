class User < ActiveRecord::Base
  attr_reader :password
  
  before_validation :ensure_session_token
  before_validation :ensure_image_url
  
  validates :username, :digested_password, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true } 
  validates :username, :session_token, uniqueness: true
  
  
  has_many(
    :posts, dependent: :destroy,
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
  
  has_many(
    :user_follows_reverse,
    class_name: "UserFollow",
    foreign_key: :followee_id,
    primary_key: :id
  )
  
  has_many(
    :followers,
    through: :user_follows_reverse,
    source: :follower
  )
  
  has_many(
    :comments, dependent: :destroy,
    class_name: "Comment",
    foreign_key: :author_id,
    primary_key: :id
  )
  
  has_many(
    :likes,
    class_name: "Like",
    foreign_key: :user_id,
    primary_key: :id
  )
  
  has_many(
    :liked_posts,
    through: :likes,
    source: :post
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
  
  def ensure_image_url
    self.image_url ||= "http://www.inta37.org/images/symposium/peoples/default_user.png"
  end
  
  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64(16)
    self.save!
    return self.session_token
  end
  
  def recom_users
    users = User.find_by_sql([<<-SQL, self.id, self.id])
    SELECT users.*
    FROM users
    LEFT OUTER JOIN (
      SELECT user_follows.*
      FROM user_follows
      WHERE user_follows.follower_id = ?
    ) AS user_follows ON users.id = user_follows.followee_id
    WHERE user_follows.id IS NULL AND users.id != ?
    
    SQL
    
    return users.shuffle.take(5)
  end
  
end