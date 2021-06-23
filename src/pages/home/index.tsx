import React, {useEffect, useState} from "react";
import {Col, Row} from 'antd';

import CardStatus from "./component/CardStatus";
import MyHome from "./component/MyHome";

const Home: React.FunctionComponent = (): React.ReactElement => {

    const [active, setActive] = useState<boolean>(true)

    useEffect(() => {
        setActive(true)
    }, [])

    return (
        <>
            <MyHome status={active}/>
            <Row justify="space-between" style={{marginTop: '37px'}}>
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
