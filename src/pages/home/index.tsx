import React, {useState, useEffect} from "react";
import Grid from '@mui/material/Grid';
import {AxiosInstance} from "axios";
import useMediaQuery from "@mui/material/useMediaQuery";

import useAxios from "hooks/useAxios";
import {IModelHome} from "./model/my-home";
import {HomeService, IHomeService} from "./service/my-home";

import ControllerButton from "./component/ControllerButton";
import Mobile from "./component/Mobile";
import Paragraph from "./component/Paragraph";

const fanTemp = '128_1_0013A20041C7F595'
const aqiTemp = '128_1_0013A20041C7F63E'
// const mockTemp = '128_1_0013A20041C9F2C6'

const Home: React.FC = (): React.ReactElement => {
    const matches = useMediaQuery('(min-width:1024px)');

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
            console.log('response', response)
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
            console.log('e', e)
            // message.error('Something went wrong!')
        }
    }

    // @ts-ignore
    useEffect(() => {
        fetchMyHome()
        // interval = setInterval(() => {
        //     fetchMyHome()
        // }, 1000)

        // return () => interval && clearInterval(interval)
        // @ts-ignore
    }, [])

    if (!matches) {
        return <></>
    }

    return (
        <Grid container>
            <Grid item
                xs={3.5}
                md={3.3}
                sm={3.3}
                className="shadow"
            // style={{minHeight: '100vh'}}
            >
                <ControllerButton />
            </Grid>

            <Grid item xs={3} md={3.5} sm={3.5}>
                <Mobile />
            </Grid>
            <Grid item xs={5.5} md={5.2} sm={5.2}>
                <Paragraph />
            </Grid>
        </Grid>
    )
};

export default Home;
