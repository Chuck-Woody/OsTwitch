import { combineReducers } from 'redux';

// import entities from './entities_reducer';
import sessionReducer from './session_reducer';
import uiReducer from './ui_reducer';
import errorReducer from './errors_reducer'
import entitiesReducer from './entities_reducer';
const rootReducer = combineReducers({
  
  entities: entitiesReducer,
  ui: uiReducer,
  session: sessionReducer,
  errors: errorReducer,
});

export default rootReducer;