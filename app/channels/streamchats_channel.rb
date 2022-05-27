class StreamchatsChannel < ApplicationCable::Channel
  def subscribed
    @channel = Channel.find_by(id: params[:channel_id])
    puts "subscription to #{@channel} made"
    stream_for @channel
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
    puts "XXXXXXXX subscription to #{@channel} removed XXXXXXXXXXX"

  end
end
