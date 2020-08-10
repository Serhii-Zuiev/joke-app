import React from "react";
import { LoadingSpinner } from "../../components/AllJokes";

describe("<LoadingSpinner/>  unit test", () => {
  it("should render LoadingSpinner component", () => {
    const component = render(<LoadingSpinner />);
    expect(component).toMatchSnapshot();
  });
});
