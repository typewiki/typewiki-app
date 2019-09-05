import * as api from '../services/api/index';

import { put, takeLatest, all, fork, call } from 'redux-saga/effects';
import { clientLogin, logout } from '../routines';
import { Routine } from 'redux-saga-routines';

function* requestWatcherSaga(): Generator {
  yield takeLatest(clientLogin.TRIGGER, requestZZZ);
  yield takeLatest(logout.TRIGGER, requestYYY);
}

function* requestLogout() {
  const responseToken = yield call(api.tokens);
  const token = responseToken.data.query.tokens.csrftoken;

  const responseLogout = yield api.logout({ token });
  return responseLogout;
}

function* requestClientLogin() {
  const responseLoginToken = yield call(api.tokens, { type: 'login' });
  const loginToken = responseLoginToken.data.query.tokens.logintoken;

  const responseClientLogin = yield api.clientLogin({
    loginToken,
    username: 'Pereslavtsev',
    password: 'wikipedia',
    loginReturnUrl: 'http://localhost:3002'
  });

  return responseClientLogin;
}

function* fetchData(routine: Routine, mmm: any): Generator {
  try {
    yield put(routine.request());
    const xxx = yield call(mmm);
    yield put(routine.success({}));
    return yield xxx;
  } catch (error) {
    yield put(routine.failure(error.message));
  } finally {
    yield put(routine.fulfill());
  }
}

function* requestZZZ(): Generator {
  const response = yield call(fetchData, clientLogin, requestClientLogin);
}

function* requestYYY(): Generator {
  const response = yield call(fetchData, logout, requestLogout);
}

export default function* rootSaga() {
  yield all([fork(requestWatcherSaga)]);
}
