class Blog < ActiveRecord::Base
  validates :owner_id, :content, presence: true
  
  belongs_to( 
    :user,
    class_name: "User",
    foreign_key: :owner_id,
    primary_key: :id
  )

end
