import React from "react";
import { shallow, ReactWrapper, ShallowWrapper, mount } from "enzyme";

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

    it("has a text area that users can type into", () => {
        const newComment = "this is a new comment"
        
        wrapped.find("textarea").simulate("change", {
            target: { value: newComment }
        });

        wrapped.update();

        expect(wrapped.find("textarea").prop("value")).toEqual(newComment);
    });
});
