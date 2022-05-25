class Api::FollowsController < ApplicationController

  def create
    @follow = Follow.new( channel_id: params[:channel_id], follower_id: current_user.id)

    if @follow.save
      render :show
    else
      render json: @follow.errors.full_messages
    end
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

  def destroy
    @follow = Follow.find_by(id: params[:id])
    @follow.destroy

    render json: @follow
  end

    private
    def follow_params
      params.require(:follow).permit(:follower_id,:channel_id)
    end
  
end
