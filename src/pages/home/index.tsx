import React from "react";
import {Col, Row} from 'antd';

import CardStatus from "./component/CardStatus";
import MyHome from "./component/MyHome";
import TopMenu from "./component/TopMenu";

import {IModelHome} from "./model/my-home";

interface IProps {
    myHome: IModelHome[]
    homeStatus: IModelHome[]
}

const Home: React.FunctionComponent<IProps> = ({myHome, homeStatus}): React.ReactElement => {
    return (
        <div style={{marginLeft: '19px', marginRight: '19px'}}>
            <TopMenu/>
            <MyHome myHome={myHome} homeStatus={homeStatus}/>
            <Row justify="space-between">
                <Col span={11}>
                    <CardStatus label="System"/>
                </Col>
                <Col span={11}>
                    <CardStatus label="Devices status"/>
                </Col>
            </Row>
        </div>
    );
};

export default Home;
