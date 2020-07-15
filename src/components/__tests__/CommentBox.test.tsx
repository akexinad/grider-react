import React from "react";
import CommentBox from "components/CommentBox";
import { ReactWrapper, mount } from "enzyme";

describe("the app component", () => {
    /**
     * we can get away with the shallow renderer here as we do not need
     * access to the components chidren.
     */
    let wrapped: ReactWrapper;

    type testElements = Array<[string, number]>;
    const elements: testElements = [
        ["textarea", 1],
        ["button", 1]
    ];

    beforeEach(() => {
        wrapped = mount(<CommentBox />);
    });

    afterEach(() => {
        wrapped.unmount();
    });

    test.each(elements)("has 1 of each of these elements", (element, qty) => {
        expect(wrapped.find(element).length).toEqual(qty);
    });
});
