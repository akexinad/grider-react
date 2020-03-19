import React, { FC, useState, ChangeEvent, FormEvent } from "react";
import { connect, Matching } from "react-redux";

import { ISaveCommentAction, IComment } from "../actions/types";

import * as actions from "../actions";

interface ICommentBoxProps {
    saveComment: (comment: IComment) => ISaveCommentAction;
}

const CommentBox: FC<Matching<
    (comment: IComment) => ISaveCommentAction,
    ICommentBoxProps
>> = ({ saveComment }) => {
    const [comment, setComment] = useState("");

    const _handleChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
        setComment(e.target.value);

    const _handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        saveComment(comment);

        setComment("");
    };

    return (
        <form onSubmit={_handleSubmit}>
            <h4>Add a comment</h4>
            <textarea value={comment} onChange={_handleChange}></textarea>
            <div>
                <button>Submit Comment</button>
            </div>
        </form>
    );
};

export default connect(null, actions)(CommentBox);
