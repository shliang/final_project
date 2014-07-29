module Api
  class PostsController < ApiController
    def create
      @post = current_user.posts.new(post_params)
      if @post.save
        render json: @post
      else
        render json: @post.errors.full_messages, status: :unprocessable_entity
      end
    end
    
    def index
      @posts = Post.joins(:user).where('posts.owner_id IN (?)', 
            ([current_user.id] + current_user.followees.pluck(:id)))
      render json: @posts, include: :user
    end
    
    def destroy
      @post = current_user.posts.find(params[:id])
      # might have to account for user deleting another user's post
      
      @post.destroy if @post
      render json: {}
    end
    
    def show
      # @post = current_user.posts.find(params[:id])
      @post = Blog.find(params[:id])
      render json: @post
    end
    
    def update
      @post = current_user.posts.find(params[:id])

      #first condition is to see if the post user trying to update belongs to user

      unless @post
        render json: ["You aren't the author of this post"], status: 403
      end
      
      if @post.update_attributes(post_params)
        render json: @post
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