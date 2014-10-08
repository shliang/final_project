module Api
  class UsersController < ApiController
    
    def index
      @users = User.all
      render "user/s_index"
    end
    
    def userfollows
      @users = User.find_by_sql([<<-SQL, current_user.id, current_user.id])
      SELECT users.*
      FROM users
      LEFT OUTER JOIN (
        SELECT user_follows.*
        FROM user_follows
        WHERE user_follows.follower_id = ?
      ) AS user_follows ON users.id = user_follows.followee_id
      WHERE user_follows.id IS NULL AND users.id != ?
      
      SQL
      
      @users = @users.shuffle.take(5)
      render "user/s_index"
    end
    
    def followees
      @users = current_user.followees + [current_user]    # also added self to followees
                                                           # for adding user info to global followees in bb
      render "user/index"
    end
    
    def show
      @user = User.find(params[:id])
      @posts = @user.posts
      render "user/show"
    end
  end
end