import React from "react";
import { mount, ReactWrapper } from "enzyme";

import CommentList from "../CommentList";
import Root from "../../Root";

let wrapped: ReactWrapper;

beforeEach(() => {
    wrapped = mount(
        <Root>
            <CommentList />
        </Root>
    );
});

it("creates one LI per comment", () => {

    
    
});
