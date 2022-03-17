import React from "react";
import {BrowserRouter} from "react-router-dom";

import Routes from "./routes";

const AppContainer: React.FunctionComponent = (): React.ReactElement => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes />
        </BrowserRouter>
    );
};

export default AppContainer;
