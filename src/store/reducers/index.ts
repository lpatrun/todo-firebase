import todoReducer, { State } from './todoReducer';
import userReducer, { UserState } from './userReducer';
import { combineReducers } from 'redux';

export interface RootReducer {
  todoReducer: State;
  userReducer: UserState;
}

const rootReducer = combineReducers({
  todoReducer,
  userReducer
});

export default rootReducer;
