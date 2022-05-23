import {
  ADD_CHANNEL,
  UPDATE_CHANNEL,RECEIVE_CHANNELS}
  from '../actions/channel_actions'


  const channelReducer = (state = {} , action) => {
    Object.freeze(state)
    switch (action.type) {
      case ADD_CHANNEL:
        return {...state,[action.channel.id]: action.channel}
      case UPDATE_CHANNEL:
        return {...state,[action.channel.id]: action.channel}
      case RECEIVE_CHANNELS:
        return action.channels
      default:
        return state;
    }
  }