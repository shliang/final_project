json.array!(@users) do |user|
  json.(user, :id, :username, :created_at, :updated_at, :image_url)
	json.posts(user.posts, :id, :owner_id, :title, :content, :created_at, :updated_at)
	json.recom_users(user.recom_users, :id, :username, :created_at, :updated_at) if current_user
	json.followers(user.followers, :id, :username, :created_at, :updated_at, :image_url) if current_user
end