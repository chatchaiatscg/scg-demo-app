import React from "react";
import {Switch} from "react-router-dom";
import {Image, Layout, Row} from "antd";

import {RenderAppRoute} from "../../core/app/route/";
import {COLORS} from "../../core/utils/constant";

import IconArrowLeft from "../../assets/icon/arrow-left.png";
import IconInfo from "../../assets/icon/info.png";

const {Content} = Layout;

const LayoutComponent: React.FunctionComponent = (): React.ReactElement => {
    return (
        <Layout style={{minHeight: "70vh"}}>
            <Content style={{backgroundColor: COLORS.white, paddingTop: '32px', paddingBottom: '32px'}}>
                <div style={{margin: "0 16px"}}>
                    <Row style={{marginBottom: '7px'}} align="middle" justify="space-between">
                        <Image
                            alt={`icon_${IconArrowLeft}`}
                            src={IconArrowLeft}
                        />

                        <Image
                            alt={`icon_${IconInfo}`}
                            src={IconInfo}
                        />
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
