import React from "react";
// import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

import IconAAQ from "assets/icon/aaq.png";
import IconAAF from "assets/icon/aaf.png";
import {
    IconBackContainer,
    RelativeButton,
    // IconBackContainer, TitleBackHome,
    TempBtnContainer, TitleBackHome, WrapBtnContainer, WrapCardBtnContainer, WrapIcon
} from "./Home.styles";
import Stack from "@mui/material/Stack";
import {Link} from "react-router-dom";
// import {Link} from "react-router-dom";

interface IProps {
    active: boolean
}

export const SimulateTemp: React.FC<IProps> = ({active}): React.ReactElement => {
    return (
        <WrapCardBtnContainer className={active ? "shadow" : ""} style={{
            cursor: 'pointer',
            backgroundColor: active ? '#8CADF6' : 'white',
            borderColor: active ? '' : '#4C89F4'
        }} variant="outlined">
            <WrapBtnContainer>
                <TempBtnContainer>
                    <div className="icon">
                        <span style={{textAlign: 'center'}}>AAF</span>
                        <WrapIcon alt="temp" src={IconAAF} />
                    </div>

                    <div style={{marginLeft: '13.7%'}}>
                        <span>จำลองอุณหภูมิสูงในบ้าน</span>
                    </div>
                </TempBtnContainer>
            </WrapBtnContainer>
        </WrapCardBtnContainer>
    )
}

export const SimulatePM: React.FC<IProps> = ({active}): React.ReactElement => {
    return (
        <WrapCardBtnContainer style={{
            cursor: 'pointer',
            backgroundColor: active ? '#8CADF6' : 'white',
            borderColor: active ? 'white' : '#4C89F4'
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
        </WrapCardBtnContainer>
    )
}

export const SimulateBtn = ({}): React.ReactElement => {
    return (
        <WrapCardBtnContainer style={{
            cursor: 'pointer',
            backgroundColor: '#8CADF6',
            borderColor: 'white'
        }} variant="outlined">
            <WrapBtnContainer>
                <TempBtnContainer sx={{ justifyContent: 'center' }}>
                <span>เเตะเพื่อเลือกดูการจำลองของอุปกรณ์</span>
                </TempBtnContainer>
            </WrapBtnContainer>
        </WrapCardBtnContainer>
    )
}

interface IControllerButton {
    handlerControlTemp: () => void
    handlerControlPM: () => void
    controlType: string
    temp: boolean
    pm: boolean
}

const ControllerButton: React.FC<IControllerButton> = ({handlerControlTemp, handlerControlPM, temp, pm}): React.ReactElement => {
    return (
        <>
            {/* <div className='outer-div'>
                <div className='middle-div'>
                    <Box className="box1" onClick={handlerControlTemp}>
                        <SimulateTemp active={temp} />
                    </Box>
                    <div style={{marginTop: '3vh'}} />
                    <Box className="box1" onClick={handlerControlPM}>
                        <SimulatePM active={pm} />
                    </Box>
                </div>
            </div> */}

            <RelativeButton />
            <Box className="box1" onClick={handlerControlTemp}>
                <SimulateTemp active={temp} />
            </Box>
            <div style={{marginTop: '3vh'}} />
            <Box className="box1" onClick={handlerControlPM}>
                <SimulatePM active={pm} />
            </Box>
            <div className="box1">
                <Link to="/start">
                    <div style={{bottom: 21, position: 'absolute', cursor: 'pointer'}}>
                        <Stack direction="row" alignItems="center">
                            <IconBackContainer />
                            <TitleBackHome style={{marginLeft: '12px'}}>
                                กลับหน้าแรก
                            </TitleBackHome>
                        </Stack>
                    </div>
                </Link>
            </div>
        </>
    )
}

const SimulateButton = (): React.ReactElement => {
    return (
        <Box className="box1" style={{ paddingTop: "1%"}}>
            <SimulateBtn /> 
        </Box>
    )
}

export {ControllerButton, SimulateButton}