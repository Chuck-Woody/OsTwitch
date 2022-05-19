import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER}
  from '../actions/session_actions'

const _nullSession = Object.freeze({
  currentUserId: null
});

const sessionReducer = (state = _nullSession, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return { currentUserId: action.user.id };
    case LOGOUT_CURRENT_USER:
      return _nullSession;
    default:
      return state;
  }
};
// The state of this reducer means that id's of the users are the keys.
export default sessionReducer;