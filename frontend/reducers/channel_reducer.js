import {
  ADD_CHANNEL,
  UPDATE_CHANNEL,RECEIVE_CHANNELS}
  from '../actions/channel_actions'
  import { RECEIVE_CURRENT_USER } from '../actions/session_actions'


  const channelReducer = (state = {} , action) => {
    Object.freeze(state)
    switch (action.type) {
      case ADD_CHANNEL:
        return {...state,[action.channel.id]: action.channel}
      case UPDATE_CHANNEL:
        return {...state,[action.channel.id]: action.channel}
      case RECEIVE_CHANNELS:
        return action.channels
      case RECEIVE_CURRENT_USER:
        return {...state, ...action.data.channels}
      default:
        return state;
    }
  }

  export default channelReducer