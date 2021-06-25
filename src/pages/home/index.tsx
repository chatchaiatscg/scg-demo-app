import React, {useState} from "react";
import {Col, Row} from 'antd';

import CardStatus from "./component/CardStatus";
import MyHome from "./component/MyHome";

import {IActiveState} from "./model/my-home";

const Home: React.FunctionComponent = (): React.ReactElement => {
    const [activeState,] = useState<IActiveState>({
        active: false,
        tempActive: true,
        pmActive: true,
    })

    return (
        <>
            <MyHome activeState={activeState}/>
            <Row justify="space-between">
                <Col span={11}>
                    <CardStatus label="System" status={activeState.active}/>
                </Col>
                <Col span={11}>
                    <CardStatus label="Devices status" status={activeState.active}/>
                </Col>
            </Row>
        </>
    );
};

export default Home;
