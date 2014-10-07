json.(user, :id, :username, :created_at, :updated_at, :image_url)

posts ||= nil

unless posts.nil?
	json.posts(posts) do |post|
	 json.partial!("posts/post", post: post)
	end
end