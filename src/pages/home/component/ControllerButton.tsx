import React from "react";
import Card from '@mui/material/Card';
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

import {IconBack} from "assets/icon/svg";
import IconAAQ from "assets/icon/aaq.png";

interface IProps { }

export const SimulateTemp: React.FC<IProps> = (): React.ReactElement => {
    const x = true
    return (
        <Card className={x ? "shadow" : ""} style={{
            cursor: 'pointer', borderRadius: 20,
            backgroundColor: x ? '#8CADF6' : 'white',
            borderColor: x ? '' : '#4C89F4'
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
                        width: {xl: '48px', lg: '35px', md: '25px'},
                        height: {xl: '40px', lg: '30px', md: '20px'}
                    }}>
                        <img alt="temp" style={{width: '100%', height: '100%'}} src={IconAAQ} />
                    </Box>
                </Stack>

                <Stack>
                    <span style={{marginLeft: '14%', fontSize: '1.5vw', fontWeight: 700}}>จำลองอุณหภูมิ สูงในบ้าน</span>
                </Stack>
            </Stack>
        </Card>
    )
}

export const SimulatePM: React.FC<IProps> = (): React.ReactElement => {
    const x = false
    return (
        <Card style={{
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
                    <span className="text1">AAQ</span>
                    <Box sx={{
                        width: {xl: '48px', lg: '35px', md: '25px'},
                        height: {xl: '40px', lg: '30px', md: '20px'}
                    }}>
                        <img alt="pm" style={{width: '100%', height: '100%'}} src={IconAAQ} />
                    </Box>
                </Stack>

                <Stack>
                    <span className="text1" style={{marginLeft: '14%'}}>จำลอง PM2.5 สูงในบ้าน</span>
                </Stack>
            </Stack>
        </Card>
    )
}

const ControllerButton = () => {
    return (
        <>
            <div className='outer-div'>
                <div className='middle-div'>
                    <Box className="box1">
                        <SimulateTemp />
                    </Box>
                    <div style={{marginTop: '24px'}} />
                    <Box className="box1">
                        <SimulatePM />
                    </Box>
                </div>
            </div>

            <div className="box1">
                <div style={{bottom: 21, position: 'absolute', cursor: 'pointer'}}>
                    <Stack direction="row" alignItems="center">
                        <IconBack
                            sx={{
                                width: {xl: '16px', lg: '16px', md: '12px'},
                                height: {xl: '16px', lg: '16px', md: '12px'}
                            }}
                        />
                        <span style={{marginLeft: '12px', fontSize: '1.45vw', fontWeight: 700}}>
                            กลับหน้าแรก
                        </span>
                    </Stack>
                </div>
            </div>
        </>
    )
}

export default ControllerButton