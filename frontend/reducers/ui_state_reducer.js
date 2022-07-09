
import { TOGGLE_DARK } from "../actions/ui_state_actions";

const dropdownReducer = (state={} , action) => {
  Object.freeze(state)
  const newState = Object.assign({},state)
  switch (action.type) {
    case TOGGLE_DARK:
       newState['dark_theme'] = !(newState['dark_theme'])
      return newState
    default:
      return state
  }
}

export default dropdownReducer