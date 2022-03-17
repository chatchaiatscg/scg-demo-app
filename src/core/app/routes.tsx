import React from "react";
import {Route, Switch} from "react-router-dom";

import HomeRoutes from "pages/home/HomeRoute";

const Routes: React.FunctionComponent = (): React.ReactElement => (
    <Switch>
        <Route path="/" exact>
            <HomeRoutes />
        </Route>
    </Switch>
);

export default Routes;
