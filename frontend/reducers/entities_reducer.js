import { combineReducers } from "redux";
import users from "./users_reducer";
import channels from './channel_reducer'
import follows from './follows_reducer'

const entitiesReducer = combineReducers({
  users,
  channels,
  follows
});

export default entitiesReducer