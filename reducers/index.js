import { combineReducers } from 'redux';
import scheduleReducers from './scheduleReducers';
import programsReducers from './programsReducers';

export default combineReducers({
  schedule: scheduleReducers,
  programs: programsReducers,
})
