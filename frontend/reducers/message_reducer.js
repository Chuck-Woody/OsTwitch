import { RECEIVE_MESSAGE } from "../actions/message_actions";

const messageReducer = ( state= {}, action) => {
  
  Object.freeze(state)
  const newState = Object.assign({},state)
  switch (action.type) {
    case RECEIVE_MESSAGE:
      newState[action.message.id] = action.message
      return newState
    default:
      return state
  }
}

export default messageReducer