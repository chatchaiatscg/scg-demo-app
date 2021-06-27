import React from "react";
import {Switch} from "react-router-dom";
import {Layout} from "antd";

import {RenderAppRoute} from "../../core/app/route/";
import {COLORS} from "../../core/utils/constant";

const {Content} = Layout;

const LayoutComponent: React.FunctionComponent = (): React.ReactElement => {
    return (
        <>
            <Layout style={{minHeight: "100vh"}}>
                <Content style={{backgroundColor: COLORS.white}}>
                    <Switch>
                        {RenderAppRoute()}
                    </Switch>
                </Content>
            </Layout>
        </>
    )
}

export default LayoutComponent
