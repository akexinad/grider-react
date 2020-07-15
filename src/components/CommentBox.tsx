import React, { Component, ChangeEvent, FormEvent } from "react";

interface ICommentBoxState {
    comment: string;
}

export default class CommentBox extends Component<
    {},
    ICommentBoxState
> {
    state = {
        comment: ""
    };

    _handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        this.setState({
            comment: e.target.value
        });
    };

    _handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        this.setState({
            comment: ""
        });
    };

    render() {
        return (
            <form onSubmit={this._handleSubmit}>
                <h4>Add a Comment</h4>
                <textarea
                    onChange={this._handleChange}
                    value={this.state.comment}
                />
                <div>
                    <button>Submit Comment</button>
                </div>
            </form>
        );
    }
}
