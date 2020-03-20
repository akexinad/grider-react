import React from "react";
import { mount, ReactWrapper } from "enzyme";

import Root from "../Root";
import App from "../components/App";

describe("integration of fetching and displaying comments", () => {
    let wrapped: ReactWrapper;

    beforeEach(() => {
        // Attempt to render the entire app
        wrapped = mount(
            <Root>
                <App />
            </Root>
        );
    });

    afterEach(() => {
        wrapped.unmount();
    });

    it("can fetch a list of comments and display them", () => {

        wrapped.find(".fetch-comments").simulate("click");

        expect(wrapped.find("li").length).toEqual(500);

    });
});


