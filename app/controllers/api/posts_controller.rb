module Api
  class PostsController < ApiController
    def create
      @post = current_user.posts.new(post_params)
      if @post.save
        @user = current_user
        render "posts/show"
      else
        render json: @post.errors.full_messages, status: :unprocessable_entity
      end
    end
    
    def destroy
      @post = current_user.posts.find(params[:id])
      @post.destroy if @post
      render "posts/show"
    end
    
    def show
      @post = Post.find(params[:id])
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
      params.require(:post).permit(:content, :title, :image_url)
    end
    
  end
end