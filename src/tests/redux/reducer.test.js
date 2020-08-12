import {
    default as reducer,
    innitialState,
    types,
} from "../../redux/jokesReducer";
import * as mock from "../mock/mockDataForRedux";

describe("reducer unit test", () => {
    it("should return the initial state", () => {
        expect(reducer(undefined, {})).toEqual(innitialState);
    });

    it("should handle FETCH_JOKES_OK", () => {
        const action = {
            type: types.FETCH_JOKES_OK,
            payload: [{ beckend: "data" }],
        };
        expect(reducer(innitialState, action)).toEqual(mock.stateWithJokes);
    });

    it("should handle FETCH_JOKES_ERR", () => {
        const action = {
            type: types.FETCH_JOKES_ERR,
            payload: { beckend: "404" },
        };
        expect(reducer(innitialState, action)).toEqual(mock.stateWithApiError);
    });

    it("should handle START_LOADING", () => {
        expect(reducer(innitialState, { type: types.START_LOADING })).toEqual(
            mock.stateWithLoadingStatus
        );
    });

    it("should handle STOP_LOADING", () => {
        expect(reducer(innitialState, { type: types.STOP_LOADING })).toEqual(
            mock.stateWithoutLoadingStatus
        );
    });

    it("should handle FILTER_JOKES", () => {
        const action = {
            type: types.FILTER_JOKES,
            payload: "Nerdy",
        };
        expect(reducer(innitialState, action)).toEqual(mock.stateWithFilter);
    });
});
