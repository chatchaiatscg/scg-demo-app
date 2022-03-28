import React, {useEffect, useRef, useState} from "react";
import Grid from '@mui/material/Grid';
import useMediaQuery from "@mui/material/useMediaQuery";

import {SimulateButton, ControllerButton} from "./component/ControllerButton";
import Mobile from "./component/Mobile";
import Paragraph from "./component/Paragraph";
import { Container } from '@mui/material';
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";

import ReactPlayer from 'react-player'

const TIME_OUT = 10000

const Home: React.FC = (): React.ReactElement => {
    // start ipad only
    const matches = useMediaQuery('(min-width:1024px)');

    const refVideo = useRef<any>(null)
    const [temp, setTemp] = useState<boolean>(true)
    const [pm, setPm] = useState<boolean>(false)
    const [revision, setRevision] = useState<number>(1)

    const [isModeSim, setIsModeSim] = useState<boolean>(true)
    let interval: any

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
        if (temp && !pm) {
            return
        }

        const nextState = !temp
        if (nextState) {
            setPm(false)
        }
        setTemp(nextState)
    }

    const handlerControlPM = () => {
        if (!temp && pm) {
            return
        }

        const nextState = !pm
        if (nextState) {
            setTemp(false)
        }
        setPm(nextState)
    }

    if (!matches) {
        return <>Not Supported</>
    }

    return (
        <>
            {isModeSim ?
                <Fade in={isModeSim}>
                    <Grid container onClick={handlerSimActive}>
                        <Grid item xs={2.98} className="shadow">
                            <ControllerButton
                                temp={temp}
                                pm={pm}
                                handlerControlTemp={handlerControlTemp}
                                handlerControlPM={handlerControlPM}
                            />
                        </Grid>

                        <Grid item xs={2.99}>
                            <Mobile temp={temp} pm={pm} />
                        </Grid>
                        <Grid item xs={6.03}>
                            <Paragraph temp={temp} pm={pm} />
                        </Grid>
                    </Grid>
                </Fade>
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


