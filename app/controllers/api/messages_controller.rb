class Api::MessagesController < ApplicationController

  def create
    @message = Message.new(message_params)
        @message.user_id = current_user.id
        if @message.save
           @channel = Channel.find_by(id: message_params[:channel_id])
            StreamchatsChannel.broadcast_to(@channel,{
              id: @message.id,
              user_id: @message.user_id,
              body:  @message.body,
              channel_id: @message.channel_id,
              created_at: @message.created_at
              })
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
