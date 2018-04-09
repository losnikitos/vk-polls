import Api from '../api';
import { put } from 'redux-saga/effects';

function* getPolls() {
  try {
    const polls = yield Api.get('/polls');
    yield put({ type: 'GOT_POLLS', polls });
  } catch (err) {
    yield put({ type: 'GET_POLLS_ERROR', err });
  }
}

export default function* rootSaga() {
  yield getPolls();
}
