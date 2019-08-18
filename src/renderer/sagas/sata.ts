import { SubmissionError } from 'redux-form';
import { submitFormRoutine } from '../routines';
import { put, takeEvery, call, fork } from 'redux-saga/effects';

function* validateFormWatcherSaga() {
  // run validation on every trigger action
  console.log('validateFormWatcherSaga');
  // @ts-ignore
  yield takeEvery(submitFormRoutine.TRIGGER, validate);
}

function* validate(action: { payload: { values: any; props: any } }) {
  // redux-form pass form values and component props to submit handler
  // so they passed to trigger action as an action payload
  const { values, props } = action.payload;

  // if (!isValid(values, props)) {
  //   // client-side validation failed
  //   const errors = getFormErrors(values, props);
  //   // reject promise given to redux-form, pass errors as SubmissionError object according to redux-form docs
  //   yield put(submitFormRoutine.failure(new SubmissionError(errors)));
  // } else {
  //   // send form data to server
  //   yield call(sendFormDataToServer, values);
  // }

  // trigger fulfill action to end routine lifecycle
  yield put(submitFormRoutine.fulfill());
}

function* sendFormDataToServer(formData: any) {
  try {
    // trigger request action
    yield put(submitFormRoutine.request());
    // perform request to '/submit' to send form data
    //const response = yield call(apiClient.request, '/submit', formData);
    // if request successfully finished
    //yield put(submitFormRoutine.success(response.data));
  } catch (error) {
    // if request failed
    yield put(submitFormRoutine.failure(new SubmissionError({ _error: error.message })));
  }
}

export default function* root() {
  yield fork(validateFormWatcherSaga);
}
