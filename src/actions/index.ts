import { ISaveCommentAction, IComment, IFetchCommentsAction } from "./types";
import axios from "axios";

export const saveComment = (comment: IComment): ISaveCommentAction => {
    return {
        type: "SAVE_COMMENT",
        payload: comment
    };
};

export const fetchComments = (): IFetchCommentsAction => {
    const response = axios.get("http://jsonplaceholder.typicode.com/comments");

    return {
        type: "FETCH_COMMENTS",
        payload: response
    };
};
