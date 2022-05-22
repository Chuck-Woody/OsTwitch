class Api::FollowsController < ApplicationController

  def create
  end

  def index
    if params[:user_id]
      @user = User.find_by(id: params[:user_id])
      if @user
        render 'index.json.jbuilder'
      else
        render json: ["That user does not exist"]
      end
    else
      render json: "this works"
    end
  end

  def show
  end


    private
    def follow_params
      params.require(:follow).permit(:follower_id,:channel_id)
    end
  
end
