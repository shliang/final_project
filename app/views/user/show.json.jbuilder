json.(@user, :id, :username, :created_at, :updated_at, :image_url)
json.user_posts(@user.posts, :id, :owner_id, :title, :content, :image_url, :created_at, :updated_at)