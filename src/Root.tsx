import React, { FC, ReactElement } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxPromise from "redux-promise";

import reducers from "./reducers";

import { IComment } from "./actions/types";

interface IRootProps {
    initialState?: { comments: IComment[] };
    children?: ReactElement | Array<ReactElement>;
}

/**
 * the creation of a root component makes our application a lot more
 * testable. This is a component we can then use to wrap the component
 * being tested and provide us with the necessary redux functionality.
 *
 *
 * INITIAL STATE
 * =============
 *
 * We can provide an inital state like so in order to test some state in
 * our components.
 */

const Root: FC<IRootProps> = ({ children, initialState }) => {
    const store = createStore(
        reducers,
        initialState,
        applyMiddleware(reduxPromise)
    );

    return <Provider store={store}>{children}</Provider>;
};

export default Root;
