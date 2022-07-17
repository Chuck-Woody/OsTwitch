class Api::UsersController < ApplicationController
  
  def create
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      render @user
      @channel = Channel.create({:owner_id => @user.id, :channel_name => @user.username})
    else
      render json: @user.errors.full_messages, status: 422 # the errors come from the errors generated when the model is validated on a create or update action.
    end
  end

  def index
    @users = User.all
    render :users
  end

  def add_message
    user = User.find(params[:user_id])
    message = params[:message]
    created_message = user.messages.create(content: message)
    ActionCable.server.broadcast('message_channel',created_message)
    head :ok
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :email)
  end
end
