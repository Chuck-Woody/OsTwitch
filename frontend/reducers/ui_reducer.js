import { combineReducers } from 'redux';
import modal from './modal_reducer';
import ui_state from './ui_state_reducer'

export default combineReducers({
  modal,
  ui_state
});