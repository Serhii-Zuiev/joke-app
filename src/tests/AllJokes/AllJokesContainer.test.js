import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";

import { AllJokesContainer } from "../../components/AllJokes";
import { default as reducer, innitialState } from "../../redux/jokesReducer";
import { filterJokes, fetchJokesRequested } from "../../redux/jokesReducer";

describe("<AllJokesContainer /> unit test", () => {
    const mockStore = createStore(reducer, innitialState);
    mockStore.dispatch = jest.fn();
    const getWrapper = () =>
        mount(
            <Provider store={mockStore}>
                <AllJokesContainer />
            </Provider>
        );

    const wrapper = getWrapper();

    it("should render AllJokesContainer component", () => {
        expect(wrapper).toMatchSnapshot();
    });

    it("should dispatch initial fetch jokes action", () => {
        getWrapper();
        expect(mockStore.dispatch).toHaveBeenCalledWith(
            fetchJokesRequested(20)
        );
    });

    it("select should dispatch the correct action on change", () => {
        wrapper.find("select").simulate("change");
        expect(mockStore.dispatch).toHaveBeenCalledWith(filterJokes("All"));
    });

    it("form should dispatch the correct action on submit", () => {
        wrapper
            .find(".form-control")
            .simulate("change", { target: { value: 11 } });
        wrapper.find(".sc-Axmtr").simulate("submit");
        expect(mockStore.dispatch).toHaveBeenCalledWith(
            fetchJokesRequested(11)
        );
    });
});
