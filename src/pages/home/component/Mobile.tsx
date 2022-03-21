import React, {useEffect, useState} from "react";
import Box from "@mui/material/Box";

// @ts-ignore
import MobileOn from "assets/images/mobileOn.png";
import MobileOff from "assets/images/mobileOff.png";
import FanActive from "assets/icon/fanActive.png";
import FanInActive from "assets/icon/fanInactive.png";
import {FanIcon, StatusBoard, StatusBoard2, WrapFanIcon, WrapMobileIcon} from "./Home.styles";
import {COLORS} from "core/utils/constant";
interface IMobile {
    temp: boolean
    pm: boolean
}

const initTemp = 36.21
const initAqi = 60

export const Mobile: React.FC<IMobile> = ({temp, pm}): React.ReactElement => {
    const [tempulature, setTempulature] = useState(initTemp)
    const [aqi, setAqi] = useState(initAqi)

    let interval: NodeJS.Timeout | null

    const handlerCalTemp = (x: number): boolean => {
        console.log('x', x)
        // over-flow
        if (x < initTemp || pm) {
            return true
        }
        return false
    }

    useEffect(() => {
        // if (pm) {
        //     interval = setInterval(() => {
        //         const rand = Math.round(Math.random() * 10)
        //         if (rand > 5) {
        //             setTempulature(tempulature + rand)
        //         } else {
        //             setTempulature(tempulature - rand)
        //         }
        //         console.log('rand', rand)
        //     }, 1000)
        //     return
        // }

        // interval && clearInterval(interval)
        // return () => {
        //     interval && clearInterval(interval)
        // }

        if (pm) {
            setTempulature(34.6)
        } else {
            setTempulature(initTemp)
        }

    }, [pm])

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