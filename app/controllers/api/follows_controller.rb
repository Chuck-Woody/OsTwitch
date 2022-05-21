class Api::FollowsController < ApplicationController

  def create



    private
    def user_params
      params.require(:follow).permit(:follo, :password, :email)
    end
  end
end
