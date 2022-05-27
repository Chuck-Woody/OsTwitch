import { combineReducers } from "redux";
import users from "./users_reducer";
import channels from './channel_reducer'
import follows from './follows_reducer'
import messages from './message_reducer'

const entitiesReducer = combineReducers({
  users,
  channels,
  follows,
  messages
});

export default entitiesReducer