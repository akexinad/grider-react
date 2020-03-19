import React from "react";
import { mount, ReactWrapper } from "enzyme";

import CommentBox from "../CommentBox";

describe("comment box", () => {
    let wrapped: ReactWrapper;

    beforeEach(() => {
        const component = <CommentBox />;
        wrapped = mount(component);
    });

    it("has a text area and a button", () => {
        expect(wrapped.find("textarea").length).toBe(1);
        expect(wrapped.find("button").length).toBe(1);
    });
});
