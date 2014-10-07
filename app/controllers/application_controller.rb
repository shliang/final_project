class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  
  
  def current_user
    return nil if session[:session_token].nil?
    user = User.find_by_session_token(session[:session_token])  
  end
  
  def log_in!(user)
    user.reset_session_token!
    session[:session_token] = user.session_token
  end
  
  def log_out!
    session[:session_token] = nil
  end
  
  def sign_in_required
    redirect_to new_session_url unless current_user
  end
  
  def already_signed_in
    redirect_to root_url if current_user
  end
  
  helper_method :current_user

end
