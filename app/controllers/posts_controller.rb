class PostsController < ApplicationController
    def index
        render json: Post.all
    end

    def show
        post = Post.find_by(id: params[:id])
        if post
          render json: post
        else
          render json: { error: "Post not found" }, status: :not_found
        end
      end
    
    def create
        post = @current_user.posts.create!(post_params)
        render json: post, status: :created
    end

    def update
        post = Post.find_by(id: params[:id])
        if post
          post.update(post_params)
          render json: post
        else
          render json: { error: "post not found" }, status: :not_found
        end
    end

    def destroy
        post = Post.find_by(id: params[:id])
        if post
            post.destroy
            head :no_content
        else
            render json: { error: "post not found" }, status: :not_found
        end
    end
    
    private

    def post_params
        params.permit(:title, :content)
    end
end
