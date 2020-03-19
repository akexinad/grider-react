import { IComment, ICommentActionTypes } from "../interfaces";

export default (state: Array<IComment> = [], action: ICommentActionTypes) => {
    switch (action.type) {
        case "SAVE_COMMENT":
            return [...state, action.payload];
        default:
            return state;
    }
};
