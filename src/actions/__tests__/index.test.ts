import { saveComment } from "..";

describe("saveComment", () => {
    const newComment = "this is a new comment";
    const action = saveComment(newComment);

    it("has the correct type", () => {
        expect(action.type).toEqual("SAVE_COMMENT");
    });

    it("has the correct payload", () => {
        expect(action.payload).toEqual(newComment);
    });
});
