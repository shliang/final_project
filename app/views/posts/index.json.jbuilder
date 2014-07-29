json.array!(@posts) do |post|
	json.partial!("posts/post", post: post)
	json.user(post.user, :id, :username, :created_at, :updated_at)
end