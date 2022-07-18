class Api::MessagesController < ApplicationController

  def create
    new_message_params = message_params
    username_color = new_message_params.delete(:username_color)
    # puts ("The message params are: #{message_params} and the new_message_params are #{new_message_params}")
    @message = Message.new(new_message_params)
        
        @message.user_id = current_user.id
        if @message.save
           @channel = Channel.find_by(id: message_params[:channel_id])
           
            StreamchatsChannel.broadcast_to(@channel,{
              id: @message.id,
              user_id: @message.user_id,
              username: User.find_by(id: @message.user_id).username,
              body:  @message.body,
              channel_id: @message.channel_id,
              created_at: @message.created_at,
              username_color: username_color
              })
            render json: {
              id: @message.id,
              user_id: @message.user_id,
              username: User.find_by(id: @message.user_id).username,
              body:  @message.body,
              channel_id: @message.channel_id,
              created_at: @message.created_at,
              username_color: username_color
              }
        else
            render json: @message.errors.full_messages, status: 422
        end
  end

  private
  def message_params
    params.require(:message).permit(:user_id,:body,:channel_id,:created_at,:username_color)
  end
end
