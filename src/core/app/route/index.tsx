import React, {lazy} from "react";
import {Link, Route} from "react-router-dom";
import {Menu} from "antd";
import {HomeOutlined} from '@ant-design/icons';

import {IPropRouteComponent, ITypeNavLink, IRole} from "./type";

const HomePage = lazy(() => import('../../../pages/home'));

const RouteComponents: IPropRouteComponent[] = [
    {
        label: "Home",
        path: "/",
        type: ITypeNavLink.NavLink,
        icon: <HomeOutlined/>,
        role: [IRole.Developer],
        Component: <HomePage/>
    },
]

export const AppRoute = () => {

    let All = [] as IPropRouteComponent[]
    let _NavLink = [] as IPropRouteComponent[]
    let _SubMenuMore = [] as IPropRouteComponent[]

    RouteComponents.forEach(route => {
        if (route.type === ITypeNavLink.NavLink) {
            _NavLink.push(route)
        } else if (route.type === ITypeNavLink.SubMenuMore) {
            _SubMenuMore.push(route)
        }
        All.push(route)
    })

    return {
        All,
        NavLink: _NavLink,
        SubMenuMore: _SubMenuMore,
    }
}

const {All, NavLink, SubMenuMore} = AppRoute()

export const RenderAppRoute = () => All.map((route) =>
    <Route key={route.path} path={route.path} exact>
        {route.Component}
    </Route>
)

export const RenderMenuAndIcon = (routes: IPropRouteComponent[]) => routes.map((route) => (
        <Menu.Item key={route.path} icon={route.icon}>
            <Link to={route.path}>
                {route.label}
            </Link>
        </Menu.Item>
    )
)

export const RenderMenu = RenderMenuAndIcon(NavLink)
export const RenderSubMenuMore = RenderMenuAndIcon(SubMenuMore)
