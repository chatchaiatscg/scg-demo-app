import React, {createElement} from "react";
import Card from '@mui/material/Card';
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

// @ts-ignore
import MobileOn from "assets/images/mobileOn.png";
import MobileOff from "assets/images/mobileOff.png";
import FanActive from "assets/icon/fanActive.png";
import {FanIcon, WrapFanIcon, WrapMobileIcon} from "./Home.styles";

interface IProps { }

export const Fan: React.FC<IProps> = (): React.ReactElement => {
    const x = true
    return (
        <Card className={x ? "shadow" : ""} style={{
            cursor: 'pointer', borderRadius: 20,
            backgroundColor: x ? '#8CADF6' : 'white',
            borderColor: x ? 'white' : '#4C89F4'
        }} variant="outlined">
            <Stack
                direction="row"
                justifyContent="space-between"
                padding="13px"
                paddingLeft="27px"
            >
                <Stack>
                    <span style={{fontSize: '1.5vw', fontWeight: 700}}>AAF</span>
                    <Box sx={{
                        width: {xl: '48px', lg: '35px'},
                        height: {xl: '40px', lg: '30px'}
                    }}>
                        {/* <img style={{width: '100%', height: '100%'}} src={IconAAQ} /> */}
                    </Box>
                </Stack>

                <Stack>
                    <span style={{marginLeft: '14%', fontSize: '1.5vw', fontWeight: 700}}>จำลองอุณหภูมิ สูงในบ้าน</span>
                </Stack>
            </Stack>
        </Card>
    )
}

const Mobile = () => {
    const x = true

    return (
        <div className='outer-div'>
            <div className='middle-div'>
                <WrapMobileIcon>
                    <Box style={{position: 'relative'}}>
                        <WrapFanIcon>
                            <FanIcon
                                // @ts-ignore
                                rotate={x ? 1 : 0}
                                className="image"
                                alt="fan-1"
                                src={FanActive}
                            />
                        </WrapFanIcon>
                        <WrapFanIcon>
                            <FanIcon
                                // @ts-ignore
                                rotate={x ? 1 : 0}
                                className="image fan2"
                                alt="fan-2"
                                src={FanActive}
                            />
                        </WrapFanIcon>
                    </Box>
                    <img src={x ? MobileOn : MobileOff} style={{width: '100%', height: 'auto'}} />
                </WrapMobileIcon>
            </div>
        </div>
    )
}

export default Mobile