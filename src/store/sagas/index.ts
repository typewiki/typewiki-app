import { all, fork, takeLatest } from 'redux-saga/effects';

function* requestWatcherSaga() {
  console.log(4324432);
}

export default function* rootSaga() {
  yield all([fork(requestWatcherSaga)]);
}
