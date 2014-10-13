module Api
  class LikesController < ApplicationController
    def create
      @like = current_user.likes.new(like_params)
      if @like.save
        render json: @like
      else
        render json: "please select post id for upload", status: :unprocessable_entity
      end
    end
  
    def destroy
      @like = Like.find(params[:id])
      @like.destroy
      render json: @like
    end
    
    def index
      @likes = current_user.likes
      render json: @likes
    end
  
    private
    def like_params
      params.require(:like).permit(:post_id)
    end
  end
end
