class UsersController < ApplicationController
  def new
    @user = User.new
  end
  
  def create
    @user = User.new(user_params)
    if @user.save
      log_in!(@user)
      redirect_to root_url
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end
  
  def show
    @user = current_user
    
    if @user.nil?
      redirect_to new_session_url
    end
  end
  
  private
  
  def user_params
    params.require(:user).permit(:username, :password)
  end
  
end
