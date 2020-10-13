import todoReducer, {
  State,
} from '../../modules/todos-module/redux/todoReducer';
import userReducer, { UserState } from '../../modules/auth/redux/userReducer';
import { combineReducers } from 'redux';

export interface RootReducer {
  todoReducer: State;
  userReducer: UserState;
}

const rootReducer = combineReducers({
  todoReducer,
  userReducer,
});

export default rootReducer;
