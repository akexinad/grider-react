import React, { FC, useState, ChangeEvent, FormEvent, Fragment } from "react";
import { connect } from "react-redux";

import { ISaveCommentAction, IComment, IFetchCommentsAction } from "../actions/types";

import * as actions from "../actions";

interface ICommentBoxProps {
    saveComment: (comment: IComment) => ISaveCommentAction;
    fetchComments: () => IFetchCommentsAction;
}

const CommentBox: FC<ICommentBoxProps> = ({ saveComment, fetchComments }) => {
    const [comment, setComment] = useState("");

    const _handleChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
        setComment(e.target.value);

    const _handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        saveComment(comment);

        setComment("");
    };

    return (
        <Fragment>
            <form onSubmit={_handleSubmit}>
                <h4>Add a comment</h4>
                <textarea value={comment} onChange={_handleChange}></textarea>
                <div>
                    <button>Submit Comment</button>
                </div>
            </form>
            <button onClick={fetchComments}>Fetch Comments</button>
        </Fragment>
    );
};

export default connect(null, actions)(CommentBox);
