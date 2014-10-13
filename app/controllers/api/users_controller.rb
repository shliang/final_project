module Api
  class UsersController < ApiController
    
    def index
      @users = User.all
      render "user/index"
    end
    
    def update
      @user = User.find(params[:id])
      if @user.update_attributes(user_params)
        render json: @user
      end
    end
    
    def followees
      @users = current_user.followees + [current_user]
      render "user/followees"
    end
    
    def followers
      @followers = current_user.followers + [current_user]
      render "user/followers"
    end
    
    def show
      @user = User.find(params[:id])
      @posts = @user.posts
      render "user/show"
    end
    
    private
    
    def user_params
      params.require(:user).permit(:image_url, :username)
    end
  end
end