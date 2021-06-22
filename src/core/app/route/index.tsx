import React, {lazy} from "react";
import {Route} from "react-router-dom";
import {HomeOutlined} from '@ant-design/icons';

import {IPropRouteComponent, ITypeNavLink} from "./type";

const HomePage = lazy(() => import('../../../pages/home'));

const RouteComponents: IPropRouteComponent[] = [
    {
        label: "Home",
        path: "/",
        type: ITypeNavLink.NavLink,
        icon: <HomeOutlined/>,
        Component: <HomePage/>
    },
]

export const RenderAppRoute = () => RouteComponents.map((route) =>
    <Route key={route.path} path={route.path} exact>
        {route.Component}
    </Route>
)
