module Api
  class UsersController < ApiController
    
    def index
      @users = User.all
      render "user/index"
    end
    
    def followees
      @users = current_user.followees + [current_user]    # also added self to followees
                                                           # for adding user info to global followees in bb
      render "user/followees"
    end
    
    def show
      @user = User.find(params[:id])
      @posts = @user.posts
      render "user/show"
    end
  end
end