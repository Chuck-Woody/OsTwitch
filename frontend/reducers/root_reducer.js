import { combineReducers } from 'redux';

// import entities from './entities_reducer';
import sessionReducer from './session_reducer';
import uiReducer from './ui_reducer';
import errorReducer from './errors_reducer'
const rootReducer = combineReducers({

  ui: uiReducer,
  session: sessionReducer,
  errors: errorReducer,
});

export default rootReducer;