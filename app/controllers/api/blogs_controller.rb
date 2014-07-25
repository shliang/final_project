module Api
  class BlogsController < ApiController
    def create
      @blog = current_user.blogs.new(blog_params)
      if @blog.save
        render json: @blog
      else
        render json: @blog.errors.full_messages, status: :unprocessable_entity
      end
    end
    
    def index
      @blogs = current_user.blogs
      render json: @blogs  
    end
    
    def destroy
      @blog = current_user.blogs.find(params[:id])
      
      # might have to account for user deleting another user's blog
      
      @blog.destroy if @blog
      render json: {}
    end
    
    def show
      # @blog = current_user.blogs.find(params[:id])
      @blog = Blog.find(params[:id])
      render json: @blog
    end
    
    def update
      @blog = current_user.blogs.find(params[:id])

      #first condition is to see if the blog user trying to update belongs to user

      unless @blog
        render json: ["You aren't the author of this post"], status: 403
      end

      if @blog.update_attributes(blog_params)
        render @blog
      else
        render json: @blog.errors.full_messages, status: :unprocessable_entity
      end
    end
    
    private
    
    def blog_params
      params.require(:blog).permit(:content, :title)
    end
    
  end
end