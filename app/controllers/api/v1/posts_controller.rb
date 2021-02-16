class Api::V1::PostsController < ActionController::Base


  # Use a token based strategy of authenticating API requests with an API key and secret since you are verifying that the request comes from an approved API client - not from your own app.

  # deactivating CSRF middleware
  protect_from_forgery with: :null_session

  def index
    @posts = Post.all
    # send post as Json
    render json: @posts
  end

  def show
    @post = Post.find(params[:id])
    render json: @post
  end

  def create
    post = Post.create(strong_params)
    render json: post
  end

  private

  def strong_params
    params.require(:post).permit(:title, :content)
  end

end
