import React from "react";
import App from "components/App";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";
import { ShallowWrapper, shallow } from "enzyme";

describe("the app component", () => {
    let wrapped: ShallowWrapper;

    beforeEach(() => {
        wrapped = shallow(<App />);
    });

    it("shows a comment box", () => {
        expect(wrapped.find(CommentBox).length).toEqual(1);
    });

    it("shows a comment list", () => {
        expect(wrapped.find(CommentList).length).toEqual(1);
    });
});
