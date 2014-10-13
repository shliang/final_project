json.partial!("posts/post", post: @post)

json.user(@post.user, :id, :username, :image_url, :created_at, :updated_at)

json.liked_users(@post.liked_users, :id, :username, :image_url, :created_at, :updated_at)

json.comments @post.comments do |comment|
	json.extract! comment, :id, :author_id, :post_id, :content, :updated_at, :created_at
	json.extract! comment.author, :image_url, :username
end

json.likes(@post.likes.where(user_id: current_user.id), :id, :post_id, :user_id)

