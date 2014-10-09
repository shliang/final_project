json.array!(@users) do |user|
  json.(user, :id, :username, :created_at, :updated_at, :image_url)
	json.user_posts(user.posts.limit(5), :id, :owner_id, :title, :content, :created_at, :updated_at)
	json.user_follows(current_user.user_follows, :id, :follower_id, :followee_id) if user == current_user
end