import React from "react";
import {Card, Col, Typography} from "antd";
import {COLORS} from "../../../core/utils/constant";

interface IProps {
    label: string
    status: boolean
}

const CardStatus: React.FunctionComponent<IProps> = ({label, status}): React.ReactElement => {
    return (
        <Card
            bodyStyle={{padding: '15px'}}
            style={{textAlign: 'center', borderRadius: '16px'}}
        >
            <div style={{textAlign: 'center'}}>
                <Col>
                    <Typography.Text style={{fontSize: 15}}>
                        {label}
                    </Typography.Text>
                </Col>
                <Col>
                    <Typography.Text style={{color: COLORS.green, fontSize: 16}}>
                        {status ? 'ON' : 'OFF'}
                    </Typography.Text>
                </Col>
            </div>
        </Card>
    )
}
export default CardStatus
