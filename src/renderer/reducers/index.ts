import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { CounterState, counterReducer } from './counterReducer';

export interface RootState {
  counter: CounterState;
  form: {};
}

export const rootReducer = combineReducers<RootState | undefined>({
  counter: counterReducer,
  form: formReducer
});
