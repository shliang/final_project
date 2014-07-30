module Api
  class PostsController < ApiController
    def create
      @post = current_user.posts.new(post_params)
      if @post.save
        render "posts/show"
      else
        render json: @post.errors.full_messages, status: :unprocessable_entity
      end
    end
    
    def index
      @posts = Post.joins(:user).where('posts.owner_id IN (?)', 
            ([current_user.id] + current_user.followees.pluck(:id)))
      # render json: @posts, include: :user
      render "posts/index"
    end
    
    def destroy
      @post = current_user.posts.find(params[:id])
      @post.destroy if @post
      render "posts/show"
    end
    
    def show
      @post = Post.find(params[:id])
      @user = @post.user
      render "posts/show"
    end
    
    def update
      @post = Post.find(params[:id])

      if @post.owner_id != current_user.id
        render json: ["You aren't the author of this post"], status: 403
      elsif @post.update_attributes(post_params)
        render "posts/show"
      else
        render json: @post.errors.full_messages, status: :unprocessable_entity
      end
    end
    
    private
    
    def post_params
      params.require(:post).permit(:content, :title)
    end
    
  end
end