import React, {useState} from "react";
import {Card, Typography, Switch, Row} from 'antd'
import {COLORS} from "../../../core/utils/constant";

const AreaBottom: React.FunctionComponent = (): React.ReactElement => {
    const [active, setActive] = useState<boolean>(true)

    const handlerOnSwitchChange = (bool: boolean) => {
        // Todo
        setActive(bool)
    }

    return (
        <>
            <Card style={{width: '100%', position: 'fixed', bottom: 0, zIndex: 99, marginLeft: '-16px'}}>
                <Row align="middle" justify="space-between">
                    <Typography.Title level={3}>
                        Device status
                    </Typography.Title>
                    <Switch
                        defaultChecked
                        checked={active}
                        onChange={handlerOnSwitchChange}
                        checkedChildren="On"
                        unCheckedChildren="Off"
                        style={{
                            backgroundColor: active ? COLORS.yellow : COLORS.disable,
                        }}
                    />
                </Row>
            </Card>
        </>
    )
}

export default AreaBottom
