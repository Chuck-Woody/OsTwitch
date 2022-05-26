class Api::ChannelsController < ApplicationController

  def index
    @channels = Channel.all
    render :index
  end

  def show
    @channel = Channel.find_by(id: params[:id])
    @messages = Message.all
    render :show
  end

  def update
      
      @channel = Channel.find_by(id: params[:id])

      if @channel.update(channel_params)
          
          render :show
      else
          render @channel.errors.full_messages, status: 401
      end
  end

private
  def channel_params
      params.require(:channel).permit(:id,:channel_description)
  end
end
