class Api::UsersController < ApplicationController
  
  def create
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      render @user
      @channel = Channel.create({:owner_id => @user.id, :channel_name => @user.username})
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def index
    @users = User.all
    render :users
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :email)
  end
end
