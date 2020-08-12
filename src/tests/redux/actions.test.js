import { types } from "../../redux/jokesReducer";
import {
    fetchJokesRequested,
    fetchSelectedJokeRequested,
    fetchJokesSuccess,
    fetchJokesError,
    startLoading,
    stopLoading,
    filterJokes,
} from "../../redux/jokesReducer";

describe("redux actions unit test", () => {
    it("should create an action to request fetch", () => {
        const payload = 20;
        const expectedAction = {
            type: types.FETCH_JOKES_REQ,
            payload,
        };
        expect(fetchJokesRequested(payload)).toEqual(expectedAction);
    });

    it("should create an action to request fetch of selected joke", () => {
        const payload = 345;
        const expectedAction = {
            type: types.FETCH_SELECTED_JOKE_REQ,
            payload,
        };
        expect(fetchSelectedJokeRequested(payload)).toEqual(expectedAction);
    });

    it("should create an action on successfull fetch", () => {
        const payload = { response: "data" };
        const expectedAction = {
            type: types.FETCH_JOKES_OK,
            payload,
        };
        expect(fetchJokesSuccess(payload)).toEqual(expectedAction);
    });

    it("should create an action on failed fetch", () => {
        const payload = { response: "error" };
        const expectedAction = {
            type: types.FETCH_JOKES_ERR,
            payload,
        };
        expect(fetchJokesError(payload)).toEqual(expectedAction);
    });

    it("should create an action of loading start", () => {
        const expectedAction = {
            type: types.START_LOADING,
        };
        expect(startLoading()).toEqual(expectedAction);
    });

    it("should create an action of loading stop", () => {
        const expectedAction = {
            type: types.STOP_LOADING,
        };
        expect(stopLoading()).toEqual(expectedAction);
    });

    it("should create an action on jokes filter schange", () => {
        const payload = "All";
        const expectedAction = {
            type: types.FILTER_JOKES,
            payload,
        };
        expect(filterJokes(payload)).toEqual(expectedAction);
    });
});
