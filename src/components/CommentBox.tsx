import React, { FC } from "react";

const CommentBox: FC = () => {
    return (
        <form>
            <h4>Add a comment</h4>
            <textarea></textarea>
            <div>
                <button>Submit Comment</button>
            </div>
        </form>
    );
};

export default CommentBox;
