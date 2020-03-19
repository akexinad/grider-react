import React, { FC, ReactElement } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";

interface IRootProps {
    children?: ReactElement | Array<ReactElement>;
}

const Root: FC<IRootProps> = ({ children }) => {
    return <Provider store={createStore(reducers, {})}>{children}</Provider>;
};

export default Root;
