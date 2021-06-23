import React from "react";
import {Row, Col, Image, Button} from 'antd';

import IconLogo from '../../assets/icon/logo.png'
import {COLORS} from "../../core/utils/constant";

const widthHeightButton = {
    width: 588,
    height: 110,
    fontSize: 40,
    borderRadius: 142.5
}

const RemoteScreen: React.FunctionComponent = (): React.ReactElement => {

    const handlerTemperature = () => {
        console.log('handlerTemperature !!')
    }

    const handlerPM = () => {
        console.log('handlerPM !!')
    }

    return (
        <>
            <Col>
                <Row justify="center">
                    <Image
                        alt={`icon_${IconLogo}`}
                        src={IconLogo}
                    />
                </Row>
            </Col>
            <Row justify="center" align="middle" style={{marginTop: '108px'}}>
                <Col span={24} style={{textAlign: 'center'}}>
                    <Button
                        type="primary"
                        style={{
                            backgroundColor: COLORS.pink,
                            borderColor: COLORS.pink,
                            ...widthHeightButton
                        }}
                        onClick={handlerTemperature}
                    >
                        จำลองอุณหภูมิในบ้านสูง
                    </Button>
                </Col>
                <Col span={24} style={{marginTop: '72px', textAlign: 'center'}}>
                    <Button
                        type="primary"
                        style={{
                            backgroundColor: COLORS.blue,
                            borderColor: COLORS.blue,
                            ...widthHeightButton
                        }}
                        onClick={handlerPM}
                    >
                        จำลอง PM2.5 ในบ้านสูง
                    </Button>
                </Col>
            </Row>
        </>
    );
};

export default RemoteScreen;
