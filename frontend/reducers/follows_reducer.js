import { RECEIVE_FOLLOWS,RECEIVE_FOLLOW, REMOVE_FOLLOW} from "../actions/follow_actions";



const followsReducer = (state ={}, action) => {
  Object.freeze(state)
  let newState = Object.assign({},state)
  // console.log("Follow Reducer action:", action)
  switch(action.type){
    case RECEIVE_FOLLOWS:
      return action.follows
    case RECEIVE_FOLLOW:
      newState[action.follow.id] = action.follow
      return newState
    case REMOVE_FOLLOW:
      delete newState[action.follow.id]
      return newState;
    default:
      return state;
  }
}

export default followsReducer