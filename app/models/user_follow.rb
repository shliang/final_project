class UserFollow < ActiveRecord::Base
  validates_uniqueness_of :follower_id, :scope => :followee_id
  
  belongs_to(
    :follower,
    class_name: "User",
    foreign_key: :follower_id,
    primary_key: :id
  )
  
  
  belongs_to(
    :followee,
    class_name: "User",
    foreign_key: :followee_id,
    primary_key: :id
  )
   
end
