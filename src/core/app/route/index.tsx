import React, {lazy, useEffect, useState} from "react";
import {Route} from "react-router-dom";
import {HomeOutlined} from '@ant-design/icons';

import {IPropRouteComponent, ITypeNavLink} from "./type";
import useAxios from "../../../hooks/useAxios";
import {HomeService, IHomeService} from "../../../pages/home/service/my-home";
import {AxiosInstance} from "axios";
import {IModelHome} from "../../../pages/home/model/my-home";
import {message} from "antd";

const HomePage = lazy(() => import('../../../pages/home'));
const RemotePage = lazy(() => import('../../../pages/remote'));

const fanTemp = '128_1_0013A20041C7F595'
const aqiTemp = '128_1_0013A20041C7F63E'
// const mockTemp = '128_1_0013A20041C9F2C6'

const RouteComponents = (): IPropRouteComponent[] => {
    const [myHome, setMyHome] = useState<IModelHome[]>([])
    const [homeStatus, setHomeStatus] = useState<IModelHome[]>([])

    const {service} = useAxios<IHomeService>((axiosInstance: AxiosInstance) => HomeService(axiosInstance))
    let interval: NodeJS.Timeout | null
    const fetchMyHome = async () => {
        let preMyHome: IModelHome[] = []
        let statusTemp: IModelHome[] = []
        let status: IModelHome[] = []
        try {
            const response = await service().getMyHome()
            response.map((value) => {
                if (value.device_type !== 'relay') {
                    return preMyHome.push(value)
                }
                return statusTemp.push(value)
            })

            statusTemp.forEach((value) => {
                if (value.device_id === fanTemp) {
                    status[0] = value
                } else if (value.device_id === aqiTemp) {
                    status[1] = value
                }
            })
            setMyHome(preMyHome)
            setHomeStatus(status)
        } catch (e) {
            message.error('Something went wrong!')
        }
    }

    // @ts-ignore
    useEffect(() => {
        fetchMyHome().then()
        // eslint-disable-next-line react-hooks/exhaustive-deps
        interval = setInterval(() => {
            fetchMyHome().then()
        }, 1000)

        return () => interval && clearInterval(interval)

        // fetchMyHome().then()
        // eslint-disable-next-line
    }, [])

    return [
        {
            label: "Home",
            path: "/",
            type: ITypeNavLink.NavLink,
            icon: <HomeOutlined/>,
            Component: <HomePage myHome={myHome} homeStatus={homeStatus}/>
        },
        {
            label: "Remote",
            path: "/remote",
            type: ITypeNavLink.NavLink,
            icon: <HomeOutlined/>,
            Component: <RemotePage myHome={myHome} homeStatus={homeStatus}/>
        },
    ]
}

export const RenderAppRoute = () => RouteComponents().map((route) =>
    <Route key={route.path} path={route.path} exact>
        {route.Component}
    </Route>
)
