import { ISaveCommentAction, IComment, SAVE_COMMENT } from "./types";

export const saveComment = (comment: IComment): ISaveCommentAction => {
    return {
        type: SAVE_COMMENT,
        payload: comment
    };
};