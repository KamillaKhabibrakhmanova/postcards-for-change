import { combineReducers } from 'redux';
import IssuesReducer from './reducer_issues';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  issues: IssuesReducer,
  form: formReducer
});

export default rootReducer;
