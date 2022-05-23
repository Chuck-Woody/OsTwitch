class Api::UsersController < ApplicationController
  
  def create
    @user = User.new(user_params)

    if @user.save
      login!(@user)
<<<<<<< HEAD
      render @user
      @channel = Channel.create({:owner_id => @user.id, :channel_name => @user.username})
=======
      render :user # name of the user show page
>>>>>>> User-Auth
    else
      render json: @user.errors.full_messages, status: 422 # the errors come from the errors generated when the model is validated on a create or update action.
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
