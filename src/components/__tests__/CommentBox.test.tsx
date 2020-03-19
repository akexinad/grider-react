import React from "react";
import { ReactWrapper, mount } from "enzyme";

import CommentBox from "../CommentBox";

let wrapped: ReactWrapper;

beforeEach(() => {
    wrapped = mount(<CommentBox />);
});

afterEach(() => {
    /**
     * make sure to clean up after every test so this element
     * does not pollute other tests in this file.
     */
    wrapped.unmount();
});

describe("the text area", () => {
    const newComment = "this is a new comment";

    beforeEach(() => {

        wrapped.find("textarea").simulate("change", {
            target: { value: newComment }
        });

        wrapped.update();
    });

    it("has a text area and a button", () => {
        expect(wrapped.find("textarea").length).toBe(1);
        expect(wrapped.find("button").length).toBe(1);
    });

    it("has a text area that users can type into", () => {
        expect(wrapped.find("textarea").prop("value")).toEqual(newComment);
    });

    it("empties the text area when the form has been submitted", () => {
        expect(wrapped.find("textarea").prop("value")).toEqual(newComment);

        wrapped.find("form").simulate("submit");

        wrapped.update();

        expect(wrapped.find("textarea").prop("value")).toEqual("");
    });
});
