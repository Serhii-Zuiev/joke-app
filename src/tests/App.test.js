import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";

import { App } from "../components";
import { default as reducer, innitialState } from "../redux/jokesReducer";

const isLoading = { isLoading: true };

function getProviderWrapper(mockData) {
    const mockStore = createStore(reducer, mockData);
    return mount(
        <Provider store={mockStore}>
            <App />
        </Provider>
    );
}

describe("<App/> unit test", () => {
    it("should render App component", () => {
        const wrapper = getProviderWrapper(innitialState);
        expect(wrapper).toMatchSnapshot();
    });

    it("should render routing component if not loading", () => {
        const routing = getProviderWrapper(innitialState).find("Routing");
        expect(routing.length).toBe(1);
    });

    it("should render spinner component if loading", () => {
        const spinner = getProviderWrapper(isLoading).find("LoadingSpinner");
        expect(spinner.length).toBe(1);
    });
});
