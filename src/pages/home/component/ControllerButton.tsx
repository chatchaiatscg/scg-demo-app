import React from "react";
import Card from '@mui/material/Card';
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

import IconAAQ from "assets/icon/aaq.png";
import {IconBackContainer, TempBtnContainer, TitleBackHome, WrapBtnContainer, WrapIcon} from "./Home.styles";

interface IProps { }

export const SimulateTemp: React.FC<IProps> = (): React.ReactElement => {
    const x = true
    return (
        <Card className={x ? "shadow" : ""} style={{
            cursor: 'pointer', borderRadius: 20,
            backgroundColor: x ? '#8CADF6' : 'white',
            borderColor: x ? '' : '#4C89F4'
        }} variant="outlined">
            <WrapBtnContainer>
                <TempBtnContainer>
                    <div className="icon">
                        <span>AAF</span>
                        <WrapIcon alt="temp" src={IconAAQ} />
                    </div>

                    <div style={{marginLeft: '13.7%'}}>
                        <span>จำลองอุณหภูมิสูงในบ้าน</span>
                    </div>
                </TempBtnContainer>
            </WrapBtnContainer>
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
            <WrapBtnContainer>
                <TempBtnContainer>
                    <div className="icon">
                        <span>AAQ</span>
                        <WrapIcon alt="temp" src={IconAAQ} />
                    </div>

                    <div style={{marginLeft: '13.7%'}}>
                        <span>จำลอง PM2.5 สูงในบ้าน</span>
                    </div>
                </TempBtnContainer>
            </WrapBtnContainer>
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
                    <Stack direction="row"  alignItems="center">
                        <IconBackContainer />
                        <TitleBackHome style={{marginLeft: '12px'}}>
                            กลับหน้าแรก
                        </TitleBackHome>
                    </Stack>
                </div>
            </div>
        </>
    )
}

export default ControllerButton