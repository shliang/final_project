class SessionsController < ApplicationController
  before_filter :already_signed_in, only: [:new, :create]
  
  def new
  end
  
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if @user
      log_in!(@user)
      redirect_to root_url
    else
      flash.now[:errors] = ["Invalid Username/Passowrd"]
      render :new
    end 
    
  end
  
  def destroy
    log_out!
    redirect_to new_session_url
  end
  
  
end
