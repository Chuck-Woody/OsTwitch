export const updateChannel = channel => (
  $.ajax({
    method: 'PATCH',
    url: '/api/channels/' + channel.id,
    data: { channel }
  })
);
export const fetchChannels =() => {
  return $.ajax({
    url: '/api/channels'
  })
}
export const addChannel = channel => (
  $.ajax({
    method: 'POST',
    url: '/api/channels/' + channel.owner_id,
    data: { channel }
  })
);