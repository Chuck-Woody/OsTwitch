
export const RECEIVE_FOLLOWS =`RECEIVE_FOLLOWS`
export const RECEIVE_FOLLOW ='RECEIVE_FOLLOW'
export const REMOVE_FOLLOW ='REMOVE_FOLLOW'


import * as FollowAPIUtil from '../util/follow_api_util'


//the regular action creators are how you want the data presented to the reducer
export const receiveFollows = (follows) => ({
  type: RECEIVE_FOLLOWS,
  follows
})

export const receiveFollow = (follow) => ({
  type: RECEIVE_FOLLOW,
  follow
})

export const removeFollow = (follow) => ({
  type: REMOVE_FOLLOW,
  follow
})

// dont forget to make your calls to the backend thats where the data is from

export const fetchFollows = (user_id) => dispatch => {
  return FollowAPIUtil.fetchFollows(user_id)
    .then(follows => dispatch(receiveFollows(follows)))
}

export const addFollow = (channel_id) => dispatch => {
  return FollowAPIUtil.addFollow(channel_id)
    .then(follow => dispatch(receiveFollow(follow)))
}
export const unFollow = (followId) => dispatch => {
  return FollowAPIUtil.unFollow(followId)
    .then((follow) => dispatch(removeFollow(follow)))
}