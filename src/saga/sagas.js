import axios from 'axios';
import { takeEvery, put, call } from "redux-saga/effects";
import { types } from "../redux/actionTypes";
import { startLoading, stopLoading, fetchJokesSuccess, fetchJokesError } from "../redux/actions";

export function* sagaWatcher() {
  yield takeEvery(types.FETCH_JOKES_REQUESTED, sagaWorker);
}

function* sagaWorker({ payload }) {
  try {
    yield put(startLoading());
    const data = yield call(fetchPosts, payload);
    yield put(fetchJokesSuccess(data));
    yield put(stopLoading());
  } catch (err) {
    console.warn(err);
    yield put(fetchJokesError(err));
    yield put(stopLoading());
  }
}

async function fetchPosts(params) {
  const response = await axios.get(
    `http://api.icndb.com/jokes/random/${params}?exclude=[]`
  );
  return await response.data.value;
}
