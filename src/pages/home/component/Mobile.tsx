import React, {useEffect, useState} from "react";
import Box from "@mui/material/Box";
import {AxiosInstance} from "axios";

// @ts-ignore
import MobileOn from "assets/images/mobileOn.png";
import MobileOff from "assets/images/mobileOff.png";
import FanActive from "assets/icon/fanActive.png";
import FanInActive from "assets/icon/fanInActive.png";
import {FanIcon, StatusBoard, StatusBoard2, WrapFanIcon, WrapMobileIcon} from "./Home.styles";
import {COLORS} from "core/utils/constant";
import useAxios from "hooks/useAxios";
import {IModelHome as IDeviceData, IHomeData} from "../model/my-home";
import {HomeService, IHomeService} from "../service/my-home";
import { stat } from "fs";
interface IMobile {
    temp: boolean
    pm: boolean
    controlType: string //air, pm25
}


// const TIME_OUT = 1000
// lab
const fanTempRelay = '130_1_0013A20041D5D18E'
const aqiTempRelay = '130_1_0013A20041D5D3D0'

// xp 
// const fanTempRelay = '128_1_0013A20041C7F595'
// const aqiTempRelay = '128_1_0013A20041C7F63E'

const initTemp = 37.0
const initAqi = 60.0

export const Mobile: React.FC<IMobile> = ({temp, pm, controlType}): React.ReactElement => {
    const [tempulature, setTempulature] = useState(initTemp)
    const [aqi, setAqi] = useState(initAqi)

//---
    const [myHome, setMyHome] = useState<IDeviceData[]>([])
    const [homeStatus, setHomeStatus] = useState<IDeviceData[]>([])
    
    const [homeData, setHomeData] = useState<IHomeData>()


    const {service} = useAxios<IHomeService>((axiosInstance: AxiosInstance) => HomeService(axiosInstance))
    let interval: NodeJS.Timeout | null
    const fetchMyHome = async () => {
        const homeData = {} as IHomeData;
        try {
            const response = await service().getHomeData()
            response.map((deviceData: IDeviceData) => {
                if (deviceData.device_id === fanTempRelay) {
                    homeData.tempRelay = deviceData.value === "1"
                } else if (deviceData.device_id === aqiTempRelay){
                    homeData.aqiRelay = deviceData.value === "1"
                } else if (deviceData.device_type === 'temperature') {
                    homeData.temperature = deviceData.value
                } else if (deviceData.device_type === 'aqi') {
                    homeData.aqi = deviceData.value
                } else if (deviceData.device_type === 'pm') {
                    homeData.pm25 = deviceData.value
                } else if (deviceData.device_type === 'co2') {
                    homeData.co2 = deviceData.value
                }
            })

            setHomeData(homeData)
            console.log('home data: ', homeData)
        } catch (e) {
            console.error('Something went wrong!')
        }
    }

    // @ts-ignore
    useEffect(() => {
        fetchMyHome().then()
        // eslint-disable-next-line react-hooks/exhaustive-deps
        interval = setInterval(() => {
            fetchMyHome().then()
        }, 5000)

        return () => interval && clearInterval(interval)

        // fetchMyHome().then()
        // eslint-disable-next-line
    }, [])
//---

    // const handlerCalTemp = (x: number): boolean => {
    //     // over-flow
    //     if (x < initTemp || pm) {
    //         return true
    //     }
    //     return false
    // }

    // const fetchTemp = async () => {
    //     try {
    //         const response = await service().getTemp()
    //         console.log('fetchTemp', response)
    //     } catch (e) {
    //         console.log('e', e)
    //     }
    // }

    // const fetchPm = async () => {
    //     try {
    //         const response = await service().getHomeData()
    //         console.log('fetchPm', response)
    //     } catch (e) {
    //         console.log('e', e)
    //     }
    // }

    // useEffect(() => {

    //     // interval = setInterval(() => {
    //     //     // fetch .. 
    //     // }, TIME_OUT)

    //     if (pm) {
    //         // mock
    //         setTempulature(34.6)
    //         setAqi(initAqi)

    //         fetchPm()
    //     } else {
    //         setTempulature(initTemp)
    //     }

    //     if (temp) {
    //         fetchTemp()
    //     } else {

    //     }

    //     return () => {
    //         interval && clearInterval(interval)
    //     }

    // // eslint-disable-next-line
    // }, [pm, temp, controlType])

    return (
        <div className='outer-div'>
            <div className='middle-div'>
                <WrapMobileIcon>
                    <Box style={{position: 'relative'}}>
                        <WrapFanIcon>
                            <FanIcon
                                // @ts-ignore
                                rotate={tempulature ? 1 : 0}
                                className="image"
                                alt="fan-1"
                                src={tempulature ? FanActive : FanInActive}
                            />
                        </WrapFanIcon>
                        <WrapFanIcon>
                            <FanIcon
                                // @ts-ignore
                                rotate={tempulature ? 1 : 0}
                                className="image fan2"
                                alt="fan-2"
                                src={tempulature ? FanActive : FanInActive}
                            />
                        </WrapFanIcon>
                    </Box>

                    <img alt="mobile" src={temp ? MobileOff : MobileOn} style={{width: '100%', height: 'auto'}} />
                </WrapMobileIcon>

                <Box style={{position: 'relative'}}>
                    <StatusBoard style={{color: temp ? COLORS.red : COLORS.green}}>
                        <div style={{position: 'relative'}}>
                            <span className="subText">
                                {Number.parseFloat(homeData?.temperature ?? initTemp.toString()).toFixed(1)}
                            </span>
                        </div>
                        <div style={{position: 'relative'}}>
                            <span>{aqi}</span>
                        </div>
                    </StatusBoard>

                    <StatusBoard2 style={{color: COLORS.green}}>
                        <div>
                            <span>{homeData?.pm25}</span>
                        </div>
                        <div className="sub">{homeData?.co2}</div>
                    </StatusBoard2>
                </Box>
            </div>
        </div>
    )
}

export default Mobile