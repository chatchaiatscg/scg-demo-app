import React, {useEffect, useRef, useState} from "react";
import Grid from '@mui/material/Grid';
import useMediaQuery from "@mui/material/useMediaQuery";

import {SimulateButton, ControllerButton} from "./component/ControllerButton";
import Mobile from "./component/Mobile";
import Paragraph from "./component/Paragraph";
import {Box, Container} from '@mui/material';
import {AxiosInstance} from "axios";
import useAxios from "hooks/useAxios";
import {HomeService, IHomeService} from "./service/my-home";
import BackgroundAAF from 'assets/images/background-aaf.png'
import BackgroundAAQ from 'assets/images/background-aaq.png'

import ReactPlayer from 'react-player'

const TIME_OUT = 300000

const Home: React.FC = (): React.ReactElement => {
    // start ipad only
    const matches = useMediaQuery('(min-width:1024px)');

    const refVideo = useRef<any>(null)
    const [temp, setTemp] = useState<boolean>(false)
    const [pm, setPm] = useState<boolean>(false)
    const [controlType, setControlType] = useState<string>("air") //air, pm25
    const [tempValue, setTempValue] = useState<boolean>(false)
    const [pm25Value, setpm25Value] = useState<boolean>(false)
    const [revision, setRevision] = useState<number>(1)

    const [isModeSim, setIsModeSim] = useState<boolean>(true)
    let interval: any

    const {service} = useAxios<IHomeService>((axiosInstance: AxiosInstance) => HomeService(axiosInstance))

    useEffect(() => {
        service().control('air', tempValue)
        service().control('pm25', pm25Value)
        // eslint-disable-next-line
    }, [tempValue, pm25Value])

    useEffect(() => {
        if (isModeSim) {
            interval = setTimeout(() => {
                setIsModeSim(false)
                refVideo?.current?.play()
            }, TIME_OUT)
        }
        // eslint-disable-next-line
    }, [isModeSim, revision])

    const handlerSimActive = () => {
        setRevision(revision + 1)
        setIsModeSim(true)
        clearTimeout(interval)
    }

    const handlerVideoActive = () => {
        refVideo?.current?.pause()
        setIsModeSim(true)
    }

    const handlerControlTemp = () => {
        const nextState = !tempValue
        setTempValue(nextState)
        if (nextState && pm25Value) {
            setpm25Value(false)
        }
        setControlType('air')
        clearTimeout(interval)
    }

    const handlerControlPM = () => {

        const nextState = !pm25Value
        setpm25Value(nextState)
        if (nextState && tempValue) {
            setTempValue(false)
        }
        setControlType('pm25')
        clearTimeout(interval)
    }

    if (!matches) {
        return <>Not Supported</>
    }

    return (
        <>
            {isModeSim ?
                <>
                    <Box
                        sx={{
                            backgroundImage: `url(${controlType === 'air' ? BackgroundAAF : BackgroundAAQ})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'contain',
                            position: 'absolute',
                            width: '100%',
                            height: '100%'
                        }}
                    />
                    <Grid container onClick={handlerSimActive}>
                        <Grid item xs={2.98} className="shadow"
                            sx={{
                                position: 'relative'
                            }}
                        >
                            <ControllerButton
                                temp={tempValue}
                                pm={pm25Value}
                                controlType={controlType}
                                handlerControlTemp={handlerControlTemp}
                                handlerControlPM={handlerControlPM}
                            />
                        </Grid>

                        <Grid item xs={2.99}
                            sx={{
                                background: 'linear-gradient(180deg, #F2F6FF 22.92%, #FCFDFF 77.6%, #FFFFFF 99.99%, #EBF1FF 100%)',
                            }}
                        >
                            <Mobile
                                temp={tempValue}
                                pm={pm25Value}
                                controlType={controlType}
                            />
                        </Grid>
                        <Grid item xs={6.03}
                            sx={{
                                background: 'linear-gradient(180deg, #F2F6FF 22.92%, #FCFDFF 77.6%, #FFFFFF 99.99%, #EBF1FF 100%)',
                            }}
                        >
                            <Paragraph pm25={controlType === 'pm25'} />
                        </Grid>
                    </Grid>
                </>
                :
                <Container
                    onClick={handlerVideoActive}
                    style={{
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)'
                    }}>
                    <ReactPlayer
                        url='video/AAF_AAQ_MERGED.mp4'
                        playing
                        width='100%'
                        height='100%'
                        loop
                    />
                    <SimulateButton></SimulateButton>
                </Container>
            }
        </>
    )
};

export default Home;


