import React, {useEffect, useState} from "react";
import {Col, Row} from 'antd';

import CardStatus from "./component/CardStatus";
import MyHome from "./component/MyHome";

const Home: React.FunctionComponent = (): React.ReactElement => {

    const [active, setActive] = useState<boolean>(true)
    const [tempActive, setTempActive] = useState<boolean>(false)
    const [pmActive, setPMActive] = useState<boolean>(false)

    useEffect(() => {
        setActive(true)
        setTempActive(false)
        setPMActive(false)
        // TODO fetch status
    }, [])

    return (
        <>
            <MyHome tempActive={tempActive} pmActive={pmActive}/>
            <Row justify="space-between">
                <Col span={11}>
                    <CardStatus label="System" status={active}/>
                </Col>
                <Col span={11}>
                    <CardStatus label="Devices status" status={active}/>
                </Col>
            </Row>
        </>
    );
};

export default Home;
