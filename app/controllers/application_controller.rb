class ApplicationController < ActionController::Base
  protect_from_forgery prepend: true, with: :exception
  helper_method :logged_in?, :current_user

  private

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by(session_token: session[:session_token])
  end
  
  def require_login
    unless current_user
      render json: { base: ['Login is required'] }, status: 401
    end
  end

  def logged_in?
    !!current_user
  end

  def login(user)
    user.reset_session_token!
    session[:session_token] = user.session_token
    @current_user = user
  end

  def logout
    current_user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
  end

end