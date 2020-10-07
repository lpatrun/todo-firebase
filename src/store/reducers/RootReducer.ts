import { combineReducers } from 'redux';
import todosReducer from './TodosReducer';

const rootReducer = combineReducers({
  todosReducerReducer: todosReducer,
});

export default rootReducer