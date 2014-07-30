json.partial!("posts/post", post: @post)

@user ||= nil

if @user
  json.user(@user,:id, :username, :created_at, :updated_at)
end