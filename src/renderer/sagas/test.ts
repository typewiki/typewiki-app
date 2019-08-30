import api from '../services/api';
import axios from 'axios';

import { put, takeEvery, all, fork, select, call } from 'redux-saga/effects';
import { clientLogin, fetchTokens } from '../routines';
import { ClientRequest } from 'electron'

function* requestWatcherSaga(): Generator {
  // run fetchDataFromServer on every trigger action
  yield takeEvery(clientLogin.TRIGGER, fetchDataFromServer);
}

function* fetchDataFromServer(): Generator {
  try {
    console.log(42343423)
    yield put(clientLogin.request());
    //yield call(fetchTokenSaga);
    //const logintoken = yield select(state => state.tokens.data.logintoken);

    const requestApi = {
      method: 'POST',
      protocol: 'https:',
      hostname: 'ru.wikipedia.org',
      path: '/w/api.php'
    };
    // @ts-ignore
    const request = new ClientRequest(requestApi);
    console.log(11111, request)

    // @ts-ignore
    request.on('response', data => { /* ... */ });
    //
    // let body = ''
    // request.end(body);
    // const response = yield api.post('', JSON.stringify({
    //   action: 'clientlogin',
    //   // username: 'Pereslavtsev',
    //   // password: 'gfdgfdgdfgdfgdfgdfgdfgd',
    //   // loginreturnurl: 'http://example.org/',
    //   // logintoken: logintoken,
    //   format: 'json'
    // }));
    //ield axios.post('https://ru.wikipedia.org/w/api.php', { action: 'login', format: 'json' });
    // const response = yield fetch('https://ru.wikipedia.org/w/api.php', {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     action: 'clientlogin',
    //     username: 'Pereslavtsev',
    //     password: 'gfgfdgfdgfdgdfg',
    //     loginreturnurl: 'http://example.org/',
    //     logintoken: logintoken,
    //     format: 'json'
    //   })
    // });
    yield put(clientLogin.success({}));
  } catch (error) {
    // if request failed
    //yield put(clientLogin.failure(error.message));
  } finally {
    // trigger fulfill action
    //yield put(clientLogin.fulfill());
  }
}

function* fetchTokenSaga() {
  try {
    yield put(fetchTokens.request());
    const xxx = yield api.request({
      params: {
        action: 'query',
        meta: 'tokens',
        type: 'login',
        format: 'json'
      }
    });
    yield put(fetchTokens.success(xxx.data));
  } catch (error) {
    yield put(fetchTokens.failure(error.message));
  } finally {
    yield put(fetchTokens.fulfill());
  }
}

export default function* rootSaga() {
  yield all([fork(requestWatcherSaga)]);
}
