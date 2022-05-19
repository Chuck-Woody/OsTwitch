class Api::UsersController < ApplicationController
  
  def create
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      render :show # name of the user show page
    else
      render json: @user.errors.full_messages, status: 422 # the errors come from the errors generated when the model is validated on a create or update action.
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :email)
  end
end
