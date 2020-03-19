import commentsReducer from "../comments";
import { SAVE_COMMENT, ISaveCommentAction } from "../../actions/types";

it("handles actions of type SAVE_COMMENT", () => {
    const newComment = "this is a new comment";

    const action: ISaveCommentAction = {
        type: SAVE_COMMENT,
        payload: newComment
    };

    const newState = commentsReducer([], action);

    expect(newState).toEqual([newComment]);
});
