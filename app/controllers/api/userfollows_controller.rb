module Api
  class UserfollowsController < ApiController
    def index
      @user_follows = UserFollow.all
      render json: @user_follows
    end
    
    def create
      @user_follow = UserFollow.new(user_follow_params)
      @user_follow.follower_id = current_user.id
      if @user_follow.save
        render json: @user_follow
      else
        render json: @user_follow.errors.full_messages, status: :unprocessable_entity
      end
    end
    
    def destroy
      @user_follow = UserFollow.find(params[:id])
      if @user_follow
        @user_follow.destroy
        render json: @user_follow
      else
        render json: ["You are not following the user"], status: 403
      end
      
    end
    
    private
    
    def user_follow_params
      params.permit(:followee_id)
    end
    
  end
end