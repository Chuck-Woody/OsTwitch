import { RECEIVE_CURRENT_USER,LOGOUT_CURRENT_USER } from '../actions/session_actions';

import { RECEIVE_FOLLOW } from '../actions/follow_actions';




const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state)
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { [action.data.user.id]: action.data.user });
    case LOGOUT_CURRENT_USER:
      return {}
    case RECEIVE_FOLLOW:
      newState[action.follow.follower_id].follows.push(action.follow.channel_id)
      return newState
    default:
      return state;
  }
};

export default usersReducer;