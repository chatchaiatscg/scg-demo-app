import React from "react";
import {Row, Col, Typography} from 'antd';

import TabMenu from "./component/TabMenu";
import ChartLine from './component/ChartLine'
import CardWeather from './component/CardWeather'
import AreaBottom from "./component/AreaBottom";

import IconIndoor from '../../assets/icon/indoor.png'
import IconOutdoor from '../../assets/icon/outdoor.png'

const Home: React.FunctionComponent = (): React.ReactElement => {
    return (
        <>
            <Typography.Title level={2}>
                AIR flow
            </Typography.Title>

            <Row>
                <Col span={24}>
                    <TabMenu/>
                </Col>
            </Row>

            <Row style={{marginTop: '33px'}}>
                <Col span={24}>
                    <ChartLine/>
                </Col>
            </Row>

            <Row style={{marginTop: '34px'}}>
                <Col span={24}>
                    <CardWeather
                        name="Indoor"
                        icon={IconIndoor}
                    />
                </Col>
            </Row>

            <div style={{marginBottom: '16px'}}/>
            <Row>
                <Col span={24}>
                    <CardWeather
                        name="Outdoor"
                        icon={IconOutdoor}
                    />
                </Col>
            </Row>

            <AreaBottom/>
        </>
    );
};

export default Home;
