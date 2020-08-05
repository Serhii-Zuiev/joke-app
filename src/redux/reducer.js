import { types } from "./actionTypes";

const innitialState = {
  jokes: [],
  filter: "All",
  isLoading: false,
  error: null,
};

export function reducer(state = innitialState, { type, payload }) {
  switch (type) {
    case types.FETCH_JOKES_SUCCESS:
      return { ...state, jokes: [...state.jokes, ...payload] };

    case types.FILTER_JOKES:
      return { ...state, filter: payload.filter };

    case types.START_LOADING:
      return { ...state, isLoading: true };

    case types.STOP_LOADING:
      return { ...state, isLoading: false };
    //TODO ошибка запускает луп.
    case types.FETCH_JOKES_ERROR:
      return { ...state, error: payload };

    default:
      return state;
  }
}
