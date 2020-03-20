import React, { FC } from "react";

import { IComment } from "../actions/types";

import { connect } from "react-redux";
import { IAppState } from "../interfaces";

interface CommentListProps {
    comments: IComment[];
}

const CommentList: FC<CommentListProps> = ({ comments }) => {
    const renderComments = () => {
        return comments.map((comment, index) => <li key={index}>{comment}</li>);
    };

    return <div>
        <ul>
            {renderComments()}
        </ul>
    </div>;
};

const mapStateToProps = (state: IAppState) => {
    return {
        comments: state.comments
    }
}

export default connect(mapStateToProps)(CommentList);
