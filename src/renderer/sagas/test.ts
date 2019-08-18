/* eslint-disable no-constant-condition */

import api from '../services/api';
import * as queryString from 'query-string';

import fetch from 'node-fetch';
import axios from 'axios';

import { put, takeEvery, delay } from 'redux-saga/effects';

export function* incrementAsync() {
  yield delay(1000);
  // const query = queryString.stringify({
  //   action: 'query',
  //   meta: 'tokens',
  //   type: 'login',
  //   format: 'json',
  // });
  // fetch(`https://en.wikipedia.org/w/api.php?${query}`)
  //   .then((res: { json: () => void }) => {
  //     console.log({ res })
  //     res.json()
  //   })
  //   .then((json: any) => console.log(json));
  const xxx = yield axios.get(`https://en.wikipedia.org/w/api.php`, {
    params: {
      action: 'query',
      meta: 'tokens',
      type: 'login',
      format: 'json'
    },
    withCredentials: true
  });
  console.log({ xxx });
  yield put({ type: 'INCREMENT' });
}

export default function* rootSaga() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}
