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
import {HomeService, IHomeService} from "../service/my-home";
interface IMobile {
    temp: boolean
    pm: boolean
}

const initTemp = 36.21
const initAqi = 60

// const TIME_OUT = 1000

export const Mobile: React.FC<IMobile> = ({temp, pm}): React.ReactElement => {
    const [tempulature, setTempulature] = useState(initTemp)
    const [aqi, setAqi] = useState(initAqi)

    const {service} = useAxios<IHomeService>((axiosInstance: AxiosInstance) => HomeService(axiosInstance))

    let interval: NodeJS.Timeout | null

    const handlerCalTemp = (x: number): boolean => {
        // over-flow
        if (x < initTemp || pm) {
            return true
        }
        return false
    }

    const fetchTemp = async () => {
        try {
            const response = await service().getTemp()
            console.log('fetchTemp', response)
        } catch (e) {
            console.log('e', e)
        }
    }

    const fetchPm = async () => {
        try {
            const response = await service().getPm()
            console.log('fetchPm', response)
        } catch (e) {
            console.log('e', e)
        }
    }

    useEffect(() => {

        // interval = setInterval(() => {
        //     // fetch .. 
        // }, TIME_OUT)

        if (pm) {
            // mock
            setTempulature(34.6)
            setAqi(initAqi)

            fetchPm()
        } else {
            setTempulature(initTemp)
        }

        if (temp) {
            fetchTemp()
        } else {

        }

        return () => {
            interval && clearInterval(interval)
        }

    // eslint-disable-next-line
    }, [pm, temp])

    return (
        <div className='outer-div'>
            <div className='middle-div'>
                <WrapMobileIcon>
                    <Box style={{position: 'relative'}}>
                        <WrapFanIcon>
                            <FanIcon
                                // @ts-ignore
                                rotate={handlerCalTemp(tempulature) ? 1 : 0}
                                className="image"
                                alt="fan-1"
                                src={handlerCalTemp(tempulature) ? FanActive : FanInActive}
                            />
                        </WrapFanIcon>
                        <WrapFanIcon>
                            <FanIcon
                                // @ts-ignore
                                rotate={handlerCalTemp(tempulature) ? 1 : 0}
                                className="image fan2"
                                alt="fan-2"
                                src={handlerCalTemp(tempulature) ? FanActive : FanInActive}
                            />
                        </WrapFanIcon>
                    </Box>

                    <img alt="mobile" src={temp ? MobileOff : MobileOn} style={{width: '100%', height: 'auto'}} />
                </WrapMobileIcon>

                <Box style={{position: 'relative'}}>
                    <StatusBoard style={{color: temp ? COLORS.red : COLORS.green}}>
                        <div style={{position: 'relative'}}>
                            <span className="subText">{tempulature.toFixed(1)}</span>
                        </div>
                        <div style={{position: 'relative'}}>
                            <span>{aqi}</span>
                        </div>
                    </StatusBoard>

                    <StatusBoard2 style={{color: COLORS.green}}>
                        <div>
                            <span>51</span>
                        </div>
                        <div className="sub">41</div>
                    </StatusBoard2>
                </Box>
            </div>
        </div>
    )
}

export default Mobile