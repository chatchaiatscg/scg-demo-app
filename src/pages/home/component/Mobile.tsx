import React from "react";
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

export const Mobile: React.FC<IMobile> = ({temp, pm}): React.ReactElement => {
    const tempulature = 34
    const aqi = 60

    const handlerCalTemp = (x: number): boolean => {
        // over-flow
        if (x >= 35 || pm) {
            return true
        }
        return false
    }

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
            </div>

            <StatusBoard style={{color: temp ? COLORS.red : COLORS.green}}>
                <div style={{position: 'relative'}}>
                    <span>{tempulature}</span>
                    {/* <span className="subText">C</span> */}
                </div>
                <div style={{position: 'relative'}}>
                    <span>{aqi}</span>
                    {/* <span className="subText">AQI</span> */}
                </div>
            </StatusBoard>

            <StatusBoard2 style={{color: COLORS.green}}>
                <div>
                    <span>50</span>
                </div>
                <div className="sub">40</div>
            </StatusBoard2>
        </div>
    )
}

export default Mobile