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
    }, [])

    const getTemperatureColor = (temp: string|undefined) => {
        const tempNum = temp ? parseFloat(temp) : 0
        if (tempNum >= 37)
            return COLORS.red
        else if (tempNum >= 34 && tempNum < 37)
            return COLORS.orange
        else
            return COLORS.green
    }

    const getAQIColor = (aqi: string|undefined) => {
        const tempAQI = aqi ? parseFloat(aqi) : 0
        if (tempAQI >= 0 && tempAQI < 51)
            return COLORS.green
        else if (tempAQI >= 51 && tempAQI <= 150)
            return COLORS.orange
        else
            return COLORS.red
    }

    const getPM25Color = (pm25: string|undefined) => {
        const tempPM25 = pm25 ? parseFloat(pm25) : 0
        if (tempPM25 >= 0 && tempPM25 < 16)
            return COLORS.green
        else if (tempPM25 >= 16 && tempPM25 <= 65)
            return COLORS.orange
        else
            return COLORS.red
    }

    return (
        <div className='outer-div'>
            <div className='middle-div'>
                <WrapMobileIcon>
                    <Box style={{position: 'relative'}}>
                        <WrapFanIcon>
                            <FanIcon
                                // @ts-ignore
                                rotate={temp ? 1 : 0}
                                className="image"
                                alt="fan-1" //Fan at ceiling
                                src={temp ? FanActive : FanInActive}
                            />
                        </WrapFanIcon>
                        <WrapFanIcon>
                            <FanIcon
                                // @ts-ignore
                                rotate={pm ? 1 : 0}
                                className="image fan2"
                                alt="fan-2" //Fan at floor
                                src={pm ? FanActive : FanInActive}
                            />
                        </WrapFanIcon>
                    </Box>

                    <img alt="mobile" src={(temp || pm) ? MobileOn : MobileOff} style={{width: '100%', height: 'auto'}} />
                </WrapMobileIcon>

                <Box style={{position: 'relative'}}>
                    <StatusBoard>
                        <div style={{position: 'relative'}}>
                            <span className="subText" style={{color: getTemperatureColor(homeData?.temperature)}}>
                                {Number.parseFloat(homeData?.temperature ?? initTemp.toString()).toFixed(1)}
                            </span>
                        </div>
                        <div style={{position: 'relative'}}>
                            <span style={{color: getAQIColor(homeData?.aqi)}}>{homeData?.aqi}</span>
                        </div>
                    </StatusBoard>

                    <StatusBoard2>
                        <div>
                            <span style={{color: getPM25Color(homeData?.pm25)}}>{homeData?.pm25}</span>
                        </div>
                        <div className="sub" style={{color: COLORS.green}}>{homeData?.co2}</div>
                    </StatusBoard2>
                </Box>
            </div>
        </div>
    )
}

export default Mobile
