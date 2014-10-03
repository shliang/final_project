module Api
  class CommentsController < ApiController
    
    def index
      post = Post.find(params[:post_id])
      @comments = post.comments
      render json: @comments
    end
    
    def create
      @comment = current_user.comments.new(comment_params)
      if @comment.save
        render json: @comment
      else
        render json: @comment.errors.full_messages,  status: :unprocessable_entity
      end
    end
    
    def update
      @comment = Comment.find(params[:id])

      if @comment.update_attributes(comment_params)
        render @comment
      else
        render json: @comment.errors.full_messages,  status: :unprocessable_entity
      end
    end
    
    def destroy
      @comment = Comment.find(params[:id])
      @comment.destroy
      render json: @comment
    end
    
    
    def comment_params
      params.require(:comment).permit(:post_id, :content)
    end
    
  end
end