import Api from '../api';
import { put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';

function* getPolls() {
  try {
    const polls = yield Api.get('/polls');
    yield put({ type: 'GOT_POLLS', polls });
  } catch (err) {
    yield put({ type: 'GET_POLLS_ERROR', err });
  }
}

function* pushVote(action) {
  try {
    const { option } = action;
    yield Api.post(`/vote/${option.id}`);
    yield getPolls(); // refresh from server
  } catch (err) {
    yield put({ type: 'VOTE_ERROR', err });
  }
}

export default function* rootSaga() {
  yield getPolls();
  yield takeEvery('VOTE', pushVote);
}
