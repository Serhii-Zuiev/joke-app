import { types } from "./actionTypes";

export const fetchJokesRequested = (params) => ({
  type: types.FETCH_JOKES_REQUESTED,
  payload: params,
});

export const fetchJokesSuccess = (data) => ({
  type: types.FETCH_JOKES_SUCCESS,
  payload: data,
});

export const fetchJokesError = (data) => ({
  type: types.FETCH_JOKES_ERROR,
  payload: data,
});

export const startLoading = () => ({
  type: types.START_LOADING,
});

export const stopLoading = () => ({
  type: types.STOP_LOADING,
});

export const filterJokes = (filter) => ({
  type: types.FILTER_JOKES,
  payload: filter,
});
