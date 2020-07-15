import React from "react";
import CommentBox from "components/CommentBox";
import { ReactWrapper, mount, ShallowWrapper, shallow } from "enzyme";

describe("the component layout", () => {
    /**
     * we can get away with the shallow renderer here as we do not need
     * access to the components chidren.
     */
    // let wrapped: ReactWrapper;
    let wrapped: ShallowWrapper;
    
    type testElements = Array<[string, number]>;
    const TEXT_AREA = "textarea";
    const BUTTON = "button";
    const elements: testElements = [
        [TEXT_AREA, 1],
        [BUTTON, 1]
    ];
    
    beforeEach(() => {
        // wrapped = mount(<CommentBox />);
        wrapped = shallow(<CommentBox />);
    });

    afterEach(() => {
        wrapped.unmount();
    });

    test.each(elements)("has 1 of each of these elements", (element, qty) => {
        expect(wrapped.find(element).length).toEqual(qty);
    });

    const changeEvent = "change";
    const submitEvent = "submit";
    const mockEventObject = {
        target: {
            value: "bla bla bla"
        }
    };

    it("has a text area that users can type in", () => {
        // SIMULATE A CHANGE EVENT WITH A MOCK OBJECT.
        wrapped.find(TEXT_AREA).simulate(changeEvent, mockEventObject);

        // MAKE THE COMPONENT RERENDER.
        wrapped.update();
        // now we can check the "value" prop belonging to the textarea to see if it equals the value of the mock object above.
        expect(wrapped.find(TEXT_AREA).prop("value")).toEqual(
            mockEventObject.target.value
        );
    });

    it("should be empty out the text area when the form is submitted", () => {
        wrapped.find(TEXT_AREA).simulate(submitEvent);

        wrapped.update();

        expect(wrapped.find(TEXT_AREA).prop("value")).toEqual("");
    });
});
