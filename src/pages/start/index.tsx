import React from "react";
import {Link} from "react-router-dom";

import ReactPlayer from 'react-player'
import {SimulateButton, ControllerButton} from "../home/component/ControllerButton";
import {Container} from '@mui/material';

const Start: React.FC = (): React.ReactElement => {

    return (
        <>
            <Link to="/">
                <Container
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
            </Link>
        </>
    )
}

export default Start