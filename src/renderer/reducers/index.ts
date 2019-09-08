import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import testReducer from './test';
import authReducer from './authReducer';
import tokensReducer from './tokensReducer';
import historyReducer from './historyReducer';
import usersReducer from './usersReducer';

// import { CounterState, counterReducer } from './counterReducer';

export interface RootState {
  //counter: CounterState;
  form: {};
  test: any;
  auth: any;
  tokens: any;
  history: any;
  users: any;
}

export const rootReducer = combineReducers<RootState | undefined>({
  //counter: counterReducer,
  form: formReducer,
  test: testReducer,
  auth: authReducer,
  tokens: tokensReducer,
  history: historyReducer,
  users: usersReducer,
});
