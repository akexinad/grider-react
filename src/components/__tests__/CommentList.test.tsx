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

it("should display those comments in the browser", () => {
    /**
     * the .render() method returns a cheerio element
     * 
     * Cheerio JS is a Fast, flexible, and lean implementation 
     * of core jQuery designed specifically for the server.
     */

    expect(wrapped.render().text()).toContain("foo");
    expect(wrapped.render().text()).toContain("bar");
});
