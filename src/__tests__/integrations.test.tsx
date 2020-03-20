import React from "react";
import { mount, ReactWrapper } from "enzyme";
import moxios from "moxios";

import Root from "../Root";
import App from "../components/App";

describe("integration of fetching and displaying comments", () => {
    let wrapped: ReactWrapper;

    beforeEach(() => {
        moxios.install();

        moxios.stubRequest("http://jsonplaceholder.typicode.com/comments", {
            status: 200,
            response: [
                {
                    name: "foo"
                },
                {
                    name: "bar"
                },
                {
                    name: "baz"
                },
                {
                    name: "bur"
                }
            ]
        });

        // Attempt to render the entire app
        wrapped = mount(
            <Root>
                <App />
            </Root>
        );
    });

    afterEach(() => {

        moxios.uninstall();
        
        wrapped.unmount();
    });

    it("can fetch a list of comments and display them", () => {
        wrapped.find(".fetch-comments").simulate("click");

        expect(wrapped.find("li").length).toEqual(4);
    });
});
