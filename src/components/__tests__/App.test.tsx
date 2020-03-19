import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import App from "../App";
import CommentBox from "../CommentBox";
import CommentList from "../CommentList";

/**
 *
 * ENZYME
 *
 * We have three rendering options with enzyme
 *
 * STATIC
 * - Render the given component and return plain HTML
 *
 * SHALLOW
 * - Render just the given component and none of its children.
 *
 * FULL DOM
 * - Render the component and all of its children and let us modify it afterwards.
 *
 */

describe("app component", () => {
    
    /**
     * we are actually creating a div inside of the browser,
     * the JSDOM library mocks up a browser like environment that
     * jest understands.
     *
     * So this div is a mocked div that existts in the terminal,
     * not the browser.
     */
    
    // const div = document.createElement("div");
    
    
    let wrapped: ShallowWrapper;
    
    beforeEach(() => {
        const component = <App />;
        wrapped = shallow(component);    
    })

    afterEach(() => {
        // this cleans up anything stored in memory to speed up tests.
        
        // ReactDOM.unmountComponentAtNode(div);
    });

    it("shows a comment box", () => {

        expect(wrapped.find(CommentBox).length).toBe(1);
        // expect(wrapper.find(CommentBox).length).toBe(2);
    });

    it("shows a comment list", () => {
        expect(wrapped.find(CommentList).length).toBe(1);
    })
});
