import { IComment, ICommentActionTypes } from "../actions/types";

export default (state: Array<IComment> = [], action: ICommentActionTypes) => {
    switch (action.type) {
        case "SAVE_COMMENT":
            return [...state, action.payload];
        default:
            return state;
    }
};
