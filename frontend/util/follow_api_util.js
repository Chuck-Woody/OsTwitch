export const fetchFollows = (user_id) => (
  $.ajax({
    method: 'GET',
    url: `/api/user/${user_id}/follows`
  })
);

export const addFollow = (channel_id) => (
  $.ajax({
    method: 'POST',
    url: `/api/follows`,
    data: {channel_id}
  })
)

export const unFollow = (followId) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/follows/` + followId,
  })
)