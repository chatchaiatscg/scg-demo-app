import React from "react";
import {Switch} from "react-router-dom";
import {Image, Layout, Row, Col, Space} from "antd";

import {RenderAppRoute} from "../../core/app/route/";
import {COLORS} from "../../core/utils/constant";

import IconMoreMenu from "../../assets/icon/moreMenu.png";
import IconInbox from "../../assets/icon/inbox.png";
import IconAlert from "../../assets/icon/alert.png";
import IconChart from "../../assets/icon/chart.png";

import ImageBackground from "../../assets/images/bg.png";
import ImageBackgroundIpad from "../../assets/images/bgIpad.png";

const {Content} = Layout;

const largeDevice = {
    // xs: 0,
    // sm: 0,
}

const smallDevice = {
    md: 0,
    lg: 0,
    xl: 0,
    xxl: 0
}

const LayoutComponent: React.FunctionComponent = (): React.ReactElement => {
    return (
        <Layout style={{minHeight: "70vh"}}>
            <Col
                {...largeDevice}
                style={{
                    position: 'absolute',
                }}
            >
                <Image
                    preview={false}
                    src={ImageBackgroundIpad}
                />
            </Col>

            <Col
                {...smallDevice}
                style={{
                    position: 'absolute',
                }}
            >
                <Image
                    preview={false}
                    src={ImageBackground}
                />
            </Col>

            <Content style={{backgroundColor: COLORS.white, paddingTop: '22px'}}>
                <div style={{margin: "0 16px"}}>
                    <Row style={{marginBottom: '12px'}} align="middle" justify="space-between">
                        <Col {...smallDevice}>
                            <Image
                                preview={false}
                                alt={`icon_${IconMoreMenu}`}
                                src={IconMoreMenu}
                            />
                        </Col>
                        <Col {...smallDevice}>
                            <Space size="middle" align="end">
                                <Image
                                    preview={false}
                                    alt={`icon_${IconInbox}`}
                                    src={IconInbox}
                                />
                                <Image
                                    preview={false}
                                    alt={`icon_${IconAlert}`}
                                    src={IconAlert}
                                />
                                <Image
                                    preview={false}
                                    alt={`icon_${IconChart}`}
                                    src={IconChart}
                                />
                            </Space>
                        </Col>
                    </Row>
                    <Switch>
                        {RenderAppRoute()}
                    </Switch>
                </div>
            </Content>
        </Layout>
    )
}

export default LayoutComponent
