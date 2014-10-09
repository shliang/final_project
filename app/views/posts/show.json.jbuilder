json.partial!("posts/post", post: @post)

json.user(@post.user, :id, :username, :image_url, :created_at, :updated_at)

json.liked_users(@post.liked_users, :id, :post_id, :user_id)

json.comments(@post.comments, :author_id, :post_id, :content)