import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { JokesList } from "../../components/AllJokes";
import { placeholder } from "../mock/mockJokesArray";

describe("<JokesList/> unit test", () => {
  it("should render JokesList component", () => {
    const component = render(
      <Router>
        <JokesList allJokes={placeholder} />
      </Router>
    );
    expect(component).toMatchSnapshot();
  });
});
