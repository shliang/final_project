class Post < ActiveRecord::Base
  validates :owner_id, :content, :title, presence: true
  
  belongs_to( 
    :user,
    class_name: "User",
    foreign_key: :owner_id,
    primary_key: :id
  )
  
  has_many(
    :comments, dependent: :destroy,
    class_name: "Comment",
    foreign_key: :post_id,  
    primary_key: :id
  )
  
  has_many(
    :likes,
    :class_name: "Like",
    foreign_key: :post_id,
    primary_key: :id
  )
  
  has_many(
    :liked_users, 
    through: :likes, 
    source: :user
  )

end
