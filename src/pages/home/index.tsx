import React, {useState, useEffect} from "react";
import Grid from '@mui/material/Grid';
// import {AxiosInstance} from "axios";
import useMediaQuery from "@mui/material/useMediaQuery";
// import useAxios from "hooks/useAxios";
// import {IModelHome} from "./model/my-home";
// import {HomeService, IHomeService} from "./service/my-home";

import ControllerButton from "./component/ControllerButton";
import Mobile from "./component/Mobile";
import Paragraph from "./component/Paragraph";

// const fanTemp = '128_1_0013A20041C7F595'
// const aqiTemp = '128_1_0013A20041C7F63E'
// const mockTemp = '128_1_0013A20041C9F2C6'

const Home: React.FC = (): React.ReactElement => {
    // start ipad only
    const matches = useMediaQuery('(min-width:1024px)');

    // const [myHome, setMyHome] = useState<IModelHome[]>([])
    // const [homeStatus, setHomeStatus] = useState<IModelHome[]>([])

    const [temp, setTemp] = useState<boolean>(false)
    const [pm, setPm] = useState<boolean>(false)

    // const {service} = useAxios<IHomeService>((axiosInstance: AxiosInstance) => HomeService(axiosInstance))

    // let interval: NodeJS.Timeout | null

    const fetchMyHome = async () => {
        // let preMyHome: IModelHome[] = []
        // let statusTemp: IModelHome[] = []
        // let status: IModelHome[] = []

        // try {
        //     const response = await service().getMyHome()
        //     // console.log('response', response)
        //     response.map((value) => {
        //         if (value.device_type !== 'relay') {
        //             return preMyHome.push(value)
        //         }
        //         return statusTemp.push(value)
        //     })

        //     statusTemp.forEach((value) => {
        //         if (value.device_id === fanTemp) {
        //             status[0] = value
        //         } else if (value.device_id === aqiTemp) {
        //             status[1] = value
        //         }
        //     })
        //     setMyHome(preMyHome)
        //     setHomeStatus(status)
        // } catch (e) {
        //     console.log('e', e)
        //     // message.error('Something went wrong!')
        // }
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

    const handlerControlTemp = () => {
        const nextState = !temp
        if (nextState) {
            setPm(false)
        }
        setTemp(nextState)
    }

    const handlerControlPM = () => {
        const nextState = !pm
        if (nextState) {
            setTemp(false)
        }
        setPm(nextState)
    }

    return (
        <>
            <span style={{position: 'absolute', color: 'red', fontSize: '32px'}}>
                {window.screen.width}
            </span>
            <Grid container>
                <Grid item xs={2.98} className="shadow">
                    <ControllerButton
                        temp={temp}
                        pm={pm}
                        handlerControlTemp={handlerControlTemp}
                        handlerControlPM={handlerControlPM}
                    />
                </Grid>

                <Grid item xs={2.99}>
                    <Mobile temp={temp} pm={pm} />
                </Grid>
                <Grid item xs={6.03}>
                    <Paragraph temp={temp} pm={pm} />
                </Grid>
            </Grid>
        </>
    )
};

export default Home;
