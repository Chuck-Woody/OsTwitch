
@channels.each do |channel|
  json.set! channel.channel_name do
      json.partial! "/api/channels/channel", channel: channel
  end
end

