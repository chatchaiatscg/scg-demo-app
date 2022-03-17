import React from "react";
import {Route} from "react-router-dom";

import Home from ".";


const HomeRoutes = (): React.ReactElement => {

    const routes = [
        {
            label: "Home",
            path: "/",
            Component: <Home />
        }
    ]

    return (
        <>
            {
                routes.map(x => (
                    <Route key={x.path} path={x.path} exact>
                        {x.Component}
                    </Route>

                ))
            }
        </>
    )
}

export default HomeRoutes