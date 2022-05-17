import { combineReducers } from 'redux';

// import entities from './entities_reducer';
import sessionReducer from './session_reducer';
import uiReducer from './ui_reducer';

const rootReducer = combineReducers({

  ui: uiReducer,
  session: sessionReducer,
  errors: errors,
});

export default rootReducer;