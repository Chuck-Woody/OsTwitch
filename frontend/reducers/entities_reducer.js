import { combineReducers } from "redux";
import users from "./users_reducer";
import channels from './channel_reducer'

const entitiesReducer = combineReducers({
  users,
  channels
});

export default entitiesReducer