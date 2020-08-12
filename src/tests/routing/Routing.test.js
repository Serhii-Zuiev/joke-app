import React from "react";
import { Routing } from "../../components/routing";

describe("<Routing/> unit test", () => {
    it("should render Routing component", () => {
        const component = shallow(<Routing />);
        expect(component).toMatchSnapshot();
    });
});
