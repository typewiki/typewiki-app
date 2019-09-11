import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import { createHashHistory } from 'history';
import { createLogger } from 'redux-logger';
import { applyMiddleware, createStore, compose } from 'redux';

import { createRootReducer, RootState } from './reducers';
import rootSaga from './sagas/';

export const history = createHashHistory();
const sagaMiddleware = createSagaMiddleware();

export const createReduxStore = (initialState?: RootState) => {
  // Redux store Configuration
  const middleware = [];

  // Skip redux logs in console during the tests
  if (process.env.NODE_ENV !== 'test') {
    // Logging Middleware
    const logger = createLogger({
      level: 'info',
      collapsed: true,
    });

    middleware.push(logger);
  }

  // Router Middleware
  const router = routerMiddleware(history);
  middleware.push(router);

  // Saga Middleware
  middleware.push(sagaMiddleware);

  const enhancer = compose(applyMiddleware(...middleware));
  return createStore(createRootReducer(history), initialState, enhancer);
};

const store = createReduxStore();
sagaMiddleware.run(rootSaga);

// enable hot reload for reducers
if (process.env.NODE_ENV === 'development') {
  if ((module as any).hot) {
    (module as any).hot.accept('./reducers', () =>
      store.replaceReducer(require('./reducers').rootReducer),
    );
  }
}

export default store;
