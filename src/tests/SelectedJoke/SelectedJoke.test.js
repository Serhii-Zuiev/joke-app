import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { BrowserRouter as Router } from "react-router-dom";
import { SelectedJoke } from "../../components/SelectedJoke";
import { default as reducer, innitialState } from "../../redux/jokesReducer";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useLayoutEffect: jest.requireActual("react").useEffect,
}));

describe("<SelectedJoke /> unit test", () => {
  const mockStore = createStore(reducer, innitialState);
  const getWrapper = () =>
    render(
      <Provider store={mockStore}>
        <Router>
          <SelectedJoke location={{ state: { id: "333" } }} />
        </Router>
      </Provider>
    );

  it("should render SelectedJoke component", () => {
    const wrapper = getWrapper();
    expect(wrapper).toMatchSnapshot();
  });
});
