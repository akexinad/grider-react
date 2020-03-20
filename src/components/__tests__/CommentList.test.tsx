import React from "react";
import { mount, ReactWrapper } from "enzyme";

import CommentList from "../CommentList";
import Root from "../../Root";

let wrapped: ReactWrapper;

beforeEach(() => {
    const initialState = {
        comments: ["foo", "bar"]
    };

    wrapped = mount(
        <Root initialState={initialState}>
            <CommentList />
        </Root>
    );
});

it("creates one li element per comment", () => {
    expect(wrapped.find("li").length).toEqual(2);
});
