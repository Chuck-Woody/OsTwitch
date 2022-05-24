
@channels.each do |channel|
  json.set! channel.owner_id do
      json.partial! "/api/channels/channel", channel: channel
  end
end

