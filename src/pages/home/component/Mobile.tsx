import React, {createElement} from "react";
import Card from '@mui/material/Card';
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

// @ts-ignore
import MobileOn from "assets/images/mobileOn.png";
import MobileOff from "assets/images/mobileOff.png";
import FanActive from "assets/icon/fanActive.png";

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

    // return (
    //     <div className='outer-div' >
    //         <div className='middle-div'>
    //             <Box sx={{
    //                 paddingLeft: {xl: '10%', lg: '0%', md: '10%'},
    //                 paddingTop: {xl: '15%', lg: '0%', md: '15%'}
    //             }}>
    //                 <img style={{width: '100%', height: 'auto'}} src={MobileOff} />
    //             </Box>
    //         </div>
    //     </div>
    // )
    return (
        <div className='outer-div'>
            <div className='middle-div'>
                <Box sx={{
                    paddingLeft: {xl: '15%',lg: '18%', md: '10%', sm: '10%'},
                    paddingTop: {xl: '20%',lg: '15%', md: '10%', sm: '15%'},
                    position: 'relative'
                }}>
                    <Box style={{position: 'relative'}}>
                        <Box
                            sx={{
                                position: 'absolute',
                                width: {xl: '48px', lg: '23px', md: '22px', tablet: '19px', sm: '19px'},
                                height: {xl: '40px', lg: '23px', md: '22px', tablet: '19px', sm: '19px'},

                                marginTop: {xl: '18.5vw', lg: '12.6vw', tablet: '13.8vw', md: '13.8vw', sm: '13.8vw'},
                                marginLeft: {xl: '40px', lg: '37.7%', tablet: '37.5%', md: '37.5%', sm: '37.5%'},
                            }}
                        >
                            <img
                                // @ts-ignore
                                rotate={x ? 1 : 0}
                                className="image"
                                alt="fan-1"
                                src={FanActive} width="100%" height="100%" />
                        </Box>
                        {/* <Box
                            sx={{
                                position: 'absolute',
                                width: {xl: '48px', lg: '35px', md: '16.6px'},
                                height: {xl: '40px', lg: '30px', md: '16.6px'},

                                marginTop: {xl: '40px', lg: '30px', md: '36.4vw', sm: '18.4vw'},
                                marginLeft: {xl: '40px', lg: '30px', md: '41%', sm: '37.5%'},
                            }}
                        >
                            <img
                                // @ts-ignore
                                rotate={x ? 1 : 0}
                                className="image"
                                alt="fan-1"
                                src={FanActive} width="100%" height="100%" />
                        </Box> */}
                    </Box>
                    <img src={x ? MobileOn : MobileOff} style={{width: '100%', height: 'auto'}} />
                </Box>
            </div>
        </div>
    )
}

export default Mobile