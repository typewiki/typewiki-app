import api from '../services/api';

import { put, takeEvery } from 'redux-saga/effects';
import { fetchData } from '../routines';

function* requestWatcherSaga() {
  // run fetchDataFromServer on every trigger action
  yield takeEvery(fetchData.TRIGGER, fetchDataFromServer)
}

function* fetchDataFromServer() {
  try {
    // trigger request action
    yield put(fetchData.request());
    // perform request to '/some_url' to fetch some data
    const response = yield api.request({
      params: {
        action: 'query',
        meta: 'tokens',
        type: 'login',
        format: 'json'
      },
    });
    // if request successfully finished
    yield put(fetchData.success(response.data));
  } catch (error) {
    // if request failed
    yield put(fetchData.failure(error.message));
  } finally {
    // trigger fulfill action
    yield put(fetchData.fulfill());
  }
}

export function* incrementAsync() {
  const xxx = yield api.request({
    params: {
      action: 'query',
      meta: 'tokens',
      type: 'login',
      format: 'json'
    },
  });
  console.log({ xxx });
  yield put({ type: 'INCREMENT' });
}

export default function* rootSaga() {
  yield takeEvery(fetchData.TRIGGER, fetchDataFromServer)
}
