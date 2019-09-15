import { all, fork, takeLatest, put } from 'redux-saga/effects';
import { routine } from '../routines';
import { ApiService } from '../utils/api';

const api = new ApiService({});

function* f() {
  //yield api.clientLogin({ username: 'Pereslavtsev', password: 'Zwikipedia271095' });
  yield api.query({
    prop: 'revisions',
    titles: 'Камбоджа',
    rvProp: [
      'ids',
      'flags',
      'timestamp',
      'user',
      'userid',
      'comment',
      'parsedcomment',
      'size',
      'slotsize',
      'tags',
      'roles',
      'sha1',
    ],
    rvSlots: '*',
    rvLimit: 100,
    formatVersion: '2',
  });
  yield put(routine.request(32131));
}

function* requestWatcherSaga() {
  yield takeLatest(routine.TRIGGER, f);
}

export default function* rootSaga() {
  yield all([fork(requestWatcherSaga)]);
}
