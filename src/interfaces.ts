export type IComment = string;

export interface ISaveCommentAction {
    type: "SAVE_COMMENT",
    payload: IComment
}

export type ICommentActionTypes = ISaveCommentAction