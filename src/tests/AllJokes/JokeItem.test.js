import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { JokeItem } from "../../components/AllJokes";

describe("<JokeItem/> unit test", () => {
  it("should render JokeItem component", () => {
    const component = render(
      <Router>
        <JokeItem text={"hahahaha"} categories={["nerdy"]} jokeID="333" />
      </Router>
    );
    expect(component).toMatchSnapshot();
  });
});
