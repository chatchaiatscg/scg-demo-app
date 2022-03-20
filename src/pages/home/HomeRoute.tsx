import Start from "pages/start";
import React from "react";
import {Route} from "react-router-dom";

import Home from ".";


const HomeRoutes = (): React.ReactElement => {

    const routes = [
        {
            label: "Home",
            path: "/",
            Component: <Home />
        },
        // {
        //     label: "",
        //     path: "/start",
        //     Component: <Start />
        // }
    ]

    return (
        <>
            {
                routes.map((x, i) => (
                    <Route key={x.path} path={x.path} exact>
                        {x.Component}
                    </Route>
                ))
            }
        </>
    )
}

export default HomeRoutes