import { IComment, ICommentActionTypes } from "../actions/types";
import { AxiosResponse } from "axios";

export default (state: Array<IComment> = [], action: ICommentActionTypes) => {
    switch (action.type) {
        case "SAVE_COMMENT":
            return [...state, action.payload];
        case "FETCH_COMMENTS":
            const comments = action.payload.data.map((comment: any) => comment.name);

            return [...state, ...comments];
        default:
            return state;
    }
};