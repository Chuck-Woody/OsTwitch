import { RECEIVE_FOLLOWS,RECEIVE_FOLLOW} from "../actions/follow_actions";



const followsReducer = (state ={}, action) => {
  Object.freeze(state)
  let newState = Object.assign({},state)
  switch(action.type){
    case RECEIVE_FOLLOWS:
      return action.follows
    case RECEIVE_FOLLOW:
      newState[action.follow.id] = action.follow
      return newState
    default:
      return state;
  }
}

export default followsReducer