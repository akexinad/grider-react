import commentsReducer from "../comments";
import { ISaveCommentAction } from "../../actions/types";

it("handles actions of type SAVE_COMMENT", () => {
    const newComment = "this is a new comment";

    const action: ISaveCommentAction = {
        type: "SAVE_COMMENT",
        payload: newComment
    };

    const newState = commentsReducer([], action);

    expect(newState).toEqual([newComment]);
});

it("handles action with an unknown type", () => {
    const unknownAction = {
        type: "kqufasbdf",
        payload: "as;jhef;"
    };

    // @ts-ignore
    const newState = commentsReducer([], unknownAction);

    expect(newState).toEqual([]);
});
