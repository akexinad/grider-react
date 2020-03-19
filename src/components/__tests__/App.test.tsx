import React from "react";
import ReactDOM from "react-dom";

import App from "../App";

describe("app component", () => {
    const component = <App />;

    /**
     * we are actually creating a div inside of the browser,
     * the JSDOM library mocks up a browser like environment that
     * jest understands.
     *
     * So this div is a mocked div that existts in the terminal,
     * not the browser.
     */

    const div = document.createElement("div");

    afterEach(() => {
        // this cleans up anything stored in memory to speed up tests.
        ReactDOM.unmountComponentAtNode(div);
    });

    it("shows a comment box", () => {
        ReactDOM.render(component, div);

        console.log("div.innerHTML", div.innerHTML);

        expect(div.innerHTML).toContain("CommentBox");
    });
});
