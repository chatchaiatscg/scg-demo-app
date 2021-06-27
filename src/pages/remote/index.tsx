import React, {useEffect, useRef, useState} from "react";
import {Row, Col, Image, Button} from 'antd';

import IconLogo from '../../assets/icon/logo.png'
import {COLORS} from "../../core/utils/constant";

import {IModelHome} from "../home/model/my-home";

import ImageBackgroundIpad from "../../assets/images/bgIpad.png";

const widthHeightButton = {
    width: 588,
    height: 110,
    fontSize: 40,
    borderRadius: 142.5
}

interface IProps {
    myHome: IModelHome[]
    homeStatus: IModelHome[]
}

const RemoteScreen: React.FunctionComponent<IProps> = ({myHome, homeStatus}): React.ReactElement => {
    const divRef = useRef<HTMLDivElement>(null)
    const [widthIpad, setWidthIpad] = useState<number>(1024)

    useEffect(() => {
        setWidthIpad(divRef?.current?.offsetWidth || 1024)
    }, [divRef])


    const handlerOnClick = (index: number) => {
        if (index === 1) {
            console.log('handlerPM !!')
            return
        }
        console.log('handlerTemperature !!')
    }

    return (
        <div ref={divRef} style={{marginTop : -15}}>
            <Image
                preview={false}
                src={ImageBackgroundIpad}
                style={{
                    position: 'absolute',
                    width: widthIpad,
                    height: '100vh'
                }}
            />
            <Row justify="center" align="middle" style={{marginTop: '88px'}}>
                <Col>
                    <Image
                        alt={`icon_${IconLogo}`}
                        src={IconLogo}
                    />
                </Col>
            </Row>

            <Row justify="center" align="middle" style={{marginTop: '108px'}}>
                {
                    homeStatus.length > 0 && homeStatus.map((value, index) => (
                        <Col key={value.device_id} span={24} style={{textAlign: 'center', marginBottom: '72px'}}>
                            <Button
                                type="primary"
                                style={{
                                    backgroundColor: index === 0 ? value.value === '1' ? COLORS.red : COLORS.pink : value.value === '1' ? COLORS.blue : COLORS.blueInActive,
                                    borderColor: index === 0 ? value.value === '1' ? COLORS.red : COLORS.pink : value.value === '1' ? COLORS.blue : COLORS.blueInActive,
                                    ...widthHeightButton
                                }}
                                onClick={() => handlerOnClick(index)}
                            >
                                {index === 0 ? 'จำลองอุณหภูมิในบ้านสูง' : 'จำลอง PM2.5 ในบ้านสูง'}
                            </Button>
                        </Col>
                    ))
                }
            </Row>
        </div>
    );
};

export default RemoteScreen;
