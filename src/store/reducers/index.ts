import { combineReducers, Reducer, AnyAction } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';

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
    test: function counter(state = 0, action: { type: any }) {
      switch (action.type) {
        case 'INCREMENT':
          return state + 1;
        case 'INCREMENT_IF_ODD':
          return state % 2 !== 0 ? state + 1 : state;
        case 'DECREMENT':
          return state - 1;
        default:
          return state;
      }
    },
  });
