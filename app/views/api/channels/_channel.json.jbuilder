json.extract! channel, :id, :channel_description, :channel_name
json.set! 'ownerId', channel.owner_id