import { combineReducers } from 'redux';
import { authentication } from './authentication.reducer';
import { alert } from './alert.reducer';
import { planets } from './planets.reducer';

const rootReducer = combineReducers({
  authentication,
  alert,
  planets,
});

export default rootReducer;
