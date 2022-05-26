class Api::MessagesController < ApplicationController

  def create
    @message = Message.new(message_params)
        @message.user_id = current_user.id
        if @message.save
            broadcast(@message.body)
            render json: {}
        else
            render json: @message.errors.full_messages, status: 422
        end
  end

  private
  def message_params
    params.require(:message).permit(:user_id,:body,:channel_id,:created_at)
  end
end
