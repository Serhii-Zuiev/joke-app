import axios from 'axios';
import { takeEvery, put, call } from "redux-saga/effects";
import { types } from "../redux/jokesReducer";
import { startLoading, stopLoading, fetchJokesSuccess, fetchJokesError } from "../redux/jokesReducer";

export function* sagaWatcher() {
  yield takeEvery(types.FETCH_JOKES_REQ, JokesSagaWorker);
  yield takeEvery(types.FETCH_SELECTED_JOKE_REQ, SelectedJokeSagaWorker);
}

function* JokesSagaWorker({ payload }) {
  try {
    yield put(startLoading());
    const data = yield call(fetchJokes, payload);
    yield put(fetchJokesSuccess(data));
    yield put(stopLoading());
  } catch (err) {
    console.warn(err);
    yield put(fetchJokesError(err));
    yield put(stopLoading());
  }
}

function* SelectedJokeSagaWorker({ payload }) {
  try {
    yield put(startLoading());
    const data = yield call(fetchSelectedJoke, payload);
    yield put(fetchJokesSuccess([data]));
    yield put(stopLoading());
  } catch (err) {
    console.warn(err);
    yield put(fetchJokesError(err));
    yield put(stopLoading());
  }
}

async function fetchJokes(params) {
  const response = await axios.get(
    `http://api.icndb.com/jokes/random/${params}?exclude=[]`
  );
  return await response.data.value;
}

async function fetchSelectedJoke(params) {
  const response = await axios.get(
    `http://api.icndb.com/jokes/${params}`
  );
  return await response.data.value;
}