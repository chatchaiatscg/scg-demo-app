import React, {useState} from "react";
import {Col, Row} from 'antd';

import CardStatus from "./component/CardStatus";
import MyHome from "./component/MyHome";

import {IActiveState, IModelHome} from "./model/my-home";

interface IProps {
    myHome: IModelHome[]
    homeStatus: IModelHome[]
}

const Home: React.FunctionComponent<IProps> = ({myHome, homeStatus}): React.ReactElement => {
    const [activeState,] = useState<IActiveState>({
        active: true,
        tempActive: true,
        pmActive: false,
    })

    return (
        <>
            <MyHome myHome={myHome} activeState={activeState}/>
            <Row justify="space-between">
                <Col span={11}>
                    <CardStatus label="System" homeStatus={homeStatus}/>
                </Col>
                <Col span={11}>
                    <CardStatus label="Devices status" homeStatus={homeStatus}/>
                </Col>
            </Row>
        </>
    );
};

export default Home;
