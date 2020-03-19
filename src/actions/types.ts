export type IComment = string;

export interface ISaveCommentAction {
    type: "SAVE_COMMENT";
    payload: IComment;
}

export type ICommentActionTypes = ISaveCommentAction;

export const SAVE_COMMENT: ISaveCommentAction["type"] = "SAVE_COMMENT";