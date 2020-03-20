import { AxiosResponse } from "axios";

export type IComment = string;

export type SAVE_COMMENT = "SAVE_COMMENT";
export type FETCH_COMMENTS = "FETCH_COMMENTS";

export interface ISaveCommentAction {
    type: SAVE_COMMENT;
    payload: IComment;
}

export interface IFetchCommentsAction {
    type: FETCH_COMMENTS;
    payload: any
}

export type ICommentActionTypes = ISaveCommentAction | IFetchCommentsAction;
