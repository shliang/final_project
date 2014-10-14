json.array!(@users) do |user|
  json.(user, :id, :username, :created_at, :updated_at, :image_url)
	
	json.posts user.posts do |post|
	  json.extract! post, :id, :owner_id, :title, :content, :image_url, :created_at, :updated_at
		json.likes(post.likes.where(user_id: current_user.id), :id, :post_id, :user_id)
	end
	
	json.recom_users(user.recom_users, :id, :username, :created_at, :updated_at, :image_url) if user  == current_user
	
	json.followers(user.followers, :id, :username, :created_at, :updated_at, :image_url) if current_user == user
	
	json.user_follows(current_user.user_follows, :id, :follower_id, :followee_id) if user == current_user
end