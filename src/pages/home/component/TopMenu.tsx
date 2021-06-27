import React from "react";
import {Image, Row, Col, Space} from "antd";

import IconMoreMenu from "../../../assets/icon/moreMenu.png";
import IconInbox from "../../../assets/icon/inbox.png";
import IconAlert from "../../../assets/icon/alert.png";
import IconChart from "../../../assets/icon/chart.png";

const TopMenu: React.FunctionComponent = (): React.ReactElement => {
    return (
        <Row style={{marginBottom: '12px', marginTop: '31px '}} align="middle" justify="space-between">
            <Col>
                <Image
                    preview={false}
                    alt={`icon_${IconMoreMenu}`}
                    src={IconMoreMenu}
                />
            </Col>
            <Col>
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
    )
}

export default TopMenu
