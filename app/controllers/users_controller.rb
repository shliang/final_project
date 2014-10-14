class UsersController < ApplicationController
  before_filter :already_signed_in, only: [:new]
  def new
    @user = User.new
  end
  
  def create
    @user = User.new(user_params)
    if @user.save
      log_in!(@user)
      User.find_by_username("Zenpost").user_follows.create(followee_id: @user.id)
      @user.user_follows.create(followee_id: User.find_by_username("Zenpost").id)
      redirect_to root_url
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end
  
  private
  
  def user_params
    params.require(:user).permit(:username, :password)
  end
  
end
