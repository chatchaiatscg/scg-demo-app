import React from "react";
import Box from "@mui/material/Box";

// @ts-ignore
import MobileOn from "assets/images/mobileOn.png";
import MobileOff from "assets/images/mobileOff.png";
import FanActive from "assets/icon/fanActive.png";
import FanInActive from "assets/icon/fanInactive.png";
import {FanIcon, WrapFanIcon, WrapMobileIcon} from "./Home.styles";
interface IMobile {
    temp: boolean
    pm: boolean
}

export const Mobile: React.FC<IMobile> = ({temp, pm}): React.ReactElement => {
    const oneOf = (temp || pm) || false

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
                                alt="fan-1"
                                src={temp ? FanActive : FanInActive}
                                active={temp}
                            />
                        </WrapFanIcon>
                        <WrapFanIcon>
                            <FanIcon
                                // @ts-ignore
                                rotate={pm ? 1 : 0}
                                className="image fan2"
                                alt="fan-2"
                                src={pm ? FanActive : FanInActive}
                                active={pm}
                            />
                        </WrapFanIcon>
                    </Box>
                    <img alt="mobile" src={oneOf ? MobileOn : MobileOff} style={{width: '100%', height: 'auto'}} />
                </WrapMobileIcon>
            </div>
        </div>
    )
}

export default Mobile