import { combineReducers, Reducer, AnyAction } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';
import testReducer from './testReducer';

// import { CounterState, counterReducer } from './counterReducer';

export interface RootState {
  router: Reducer<RouterState, AnyAction>;
  form: {};
  test: any;
}

export const createRootReducer = (history: History) =>
  combineReducers<RootState>({
    router: connectRouter(history) as any,
    form: formReducer,
    test: testReducer,
  });
