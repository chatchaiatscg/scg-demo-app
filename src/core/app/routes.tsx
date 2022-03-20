import React from "react";
import {Route, Switch} from "react-router-dom";

import HomeRoutes from "pages/home/HomeRoute";
import Start from "pages/start";

const Routes: React.FunctionComponent = (): React.ReactElement => (
    <Switch>
        <Route path="/" exact>
            <HomeRoutes />
        </Route>

        <Route path="/start">
            <Start />
        </Route>
    </Switch>
);

export default Routes;
