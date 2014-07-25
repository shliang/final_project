module Api
  class UserFollowsController < ApiController
    def create
      @user_follow = UserFollow.new(user_follow_params)
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
    
    private:
    
    def user_follow_params
      params.require(:user_follow).permit(:follower_id, :followee_id)
    end
    
  end
end