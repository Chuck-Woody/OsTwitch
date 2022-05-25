import { RECEIVE_CURRENT_USER,LOGOUT_CURRENT_USER } from '../actions/session_actions';

import { RECEIVE_FOLLOW,REMOVE_FOLLOW} from '../actions/follow_actions';




const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state)
  console.log("The users reducer's state looks like:",newState)
  console.log("Action in user reducer", action.follow)
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { [action.data.user.id]: action.data.user });
    case LOGOUT_CURRENT_USER:
      return {}
    case RECEIVE_FOLLOW:
      newState[action.follow.follower_id].follows.push(action.follow.channel_id)
      return newState
    case REMOVE_FOLLOW:
      newState[action.follow.follower_id].follows = newState[action.follow.follower_id].follows.filter(channelId => channelId !== action.follow.channel_id)
      return newState
    default:
      return state;
  }
};

export default usersReducer;