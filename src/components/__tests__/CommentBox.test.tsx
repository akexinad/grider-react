import React from "react";
import { mount, ReactWrapper } from "enzyme";

import CommentBox from "../CommentBox";

describe("comment box", () => {
    let wrapped: ReactWrapper;

    beforeEach(() => {
        const component = <CommentBox />;
        wrapped = mount(component);
    });

    afterEach(() => {
        /**
         * make sure to clean up after every test so this element
         * does not pollute other tests in this file.
         */
        wrapped.unmount();
    });

    it("has a text area and a button", () => {
        expect(wrapped.find("textarea").length).toBe(1);
        expect(wrapped.find("button").length).toBe(1);
    });
});
