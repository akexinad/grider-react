import React, { FC, useState, ChangeEvent, FormEvent } from "react";

const CommentBox: FC = () => {
    const [comment, setComment] = useState("");

    const _handleChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
        setComment(e.target.value);

    const _handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        setComment("");
    }

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

export default CommentBox;
