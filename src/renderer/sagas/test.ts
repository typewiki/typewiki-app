import * as api from '../services/api/index';

import { put, takeLatest, all, fork, call, select } from 'redux-saga/effects';
import { clientLogin, logout, fetchRevisions, fetchUsers } from '../routines';
import { Routine } from 'redux-saga-routines';
import { Simulate } from 'react-dom/test-utils';

function* requestWatcherSaga(): Generator {
  yield takeLatest(clientLogin.TRIGGER, requestZZZ);
  yield takeLatest(logout.TRIGGER, requestYYY);
  yield takeLatest(fetchRevisions.TRIGGER, requestXXX);
  yield takeLatest(fetchUsers.TRIGGER, requestXXc);
}

function* requestLogout() {
  const responseToken = yield call(api.tokens);
  const token = responseToken.data.query.tokens.csrftoken;

  const responseLogout = yield api.logout({ token });
  return responseLogout;
}

function* requestRev() {
  const responseToken = yield call(api.query, {
    prop: 'revisions',
    titles: 'Камбоджа',
    rvProp: 'ids|flags|timestamp|user|userid|comment|parsedcomment|tags|roles|sha1',
    rvSlots: '*',
    rvLimit: 100,
    formatVersion: '2'
  });
  return responseToken;
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
  console.log({ routine, mmm });
  try {
    yield put(routine.request());
    const { data } = yield call(mmm);
    yield put(routine.success(data));
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

function* requestXXX(): Generator {
  const response = yield call(fetchData, fetchRevisions, requestRev);
}

function* requestXXc(action: any): Generator {
  try {
    yield put(fetchUsers.request());
    const { data } = yield call(api.query, {
      list: 'users',
      usProp: 'blockinfo|groups|editcount|registration|emailable|gender',
      usUsers: [action.payload].join('|')
    });
    yield put(fetchUsers.success(data));
  } catch (error) {
    yield put(fetchUsers.failure(error.message));
  } finally {
    yield put(fetchUsers.fulfill());
  }
}

export default function* rootSaga() {
  yield all([fork(requestWatcherSaga)]);
}
