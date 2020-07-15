import React from "react";
import ReactDOM from "react-dom";
import App from "../App";

it("shows a comment box", () => {
    /**
     * REMEMBER: None of these tests are actually runniing in the browser.
     * All your tests are being run in the CLI environment.
     * 
     * Create React App installs a dependency called JSDOM that tricks the code
     * to thinking that is being run in the browser.
     * 
     * JSDOM
     * =====
     * jsdom is a pure-JavaScript implementation of many web standards, notably 
     * the WHATWG DOM and HTML Standards, for use with Node.js. In general, the goal
     * of the project is to emulate enough of a subset of a web browser to be
     * useful for testing and scraping real-world web applications.
     */

    const div = document.createElement("div");

    ReactDOM.render(<App />, div);

    expect(div.innerHTML).toContain("comment box")

    ReactDOM.unmountComponentAtNode(div);
});
