import { ISaveCommentAction, IComment } from "../interfaces";
import { SAVE_COMMENT } from "./types";

export const saveComment = (comment: IComment): ISaveCommentAction => {
    return {
        type: SAVE_COMMENT,
        payload: comment
    };
};