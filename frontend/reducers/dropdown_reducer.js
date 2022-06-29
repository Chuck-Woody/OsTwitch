
import { CLOSE_ALL_DROPDOWNS,OPEN_DROPDOWN } from "../actions/dropdown_action";

const dropdownReducer = (state=null , action) => {
  Object.freeze(state)
  const newState = Object.assign({},state)
  switch (action.type) {
    case CLOSE_ALL_DROPDOWNS:
      return null
    case OPEN_DROPDOWN:
      newState[action.payload] = true
      return newState
    default:
      return state
  }
}

export default dropdownReducer