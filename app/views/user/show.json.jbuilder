json.(@user, :id, :username, :created_at, :updated_at, :image_url)
json.user_posts(@user.posts, :id, :owner_id, :title, :content, :created_at, :updated_at)