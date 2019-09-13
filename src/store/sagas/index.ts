import { all, fork, takeLatest, put } from 'redux-saga/effects';
import { routine } from '../routines';

function* f() {
  yield put(routine.request(32131));
}

function* requestWatcherSaga() {
  yield takeLatest(routine.TRIGGER, f);
}

export default function* rootSaga() {
  yield all([fork(requestWatcherSaga)]);
}

