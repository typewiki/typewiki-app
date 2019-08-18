import { applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/test';
import { createLogger } from 'redux-logger';

import { rootReducer, RootState } from '../reducers';
const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();

const configureStore = (initialState?: RootState): Store<RootState | undefined> => {
  const middlewares: any[] = [sagaMiddleware, logger];
  const enhancer = composeWithDevTools(applyMiddleware(...middlewares));
  return createStore(rootReducer, initialState, enhancer);
};

const store = configureStore();
sagaMiddleware.run(rootSaga);

if (typeof module.hot !== 'undefined') {
  module.hot.accept('../reducers', () => store.replaceReducer(require('../reducers').rootReducer));
}

export default store;
