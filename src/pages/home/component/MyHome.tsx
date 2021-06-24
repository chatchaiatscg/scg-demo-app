import React, {useEffect, useRef, useState} from "react";
import {Card, Image, Typography, Row, Col} from 'antd';

import {COLORS} from "../../../core/utils/constant";

import ImageHome from '../../../assets/images/groupFan.png'
import ImageHomeActive from '../../../assets/images/groupFanActive.png'
import IconPM from '../../../assets/icon/pm.png'
import IconCarbon from '../../../assets/icon/carbon.png'

import IconFanActive from '../../../assets/icon/fanActive.png'
import IconFanInActive from '../../../assets/icon/fanInActive.png'

interface IProps {
    tempActive: boolean
    pmActive: boolean
}

const CONSTANT_WIDTH = {
    se: 288
}

const MyHome: React.FunctionComponent<IProps> = ({tempActive, pmActive}): React.ReactElement => {
    const divRef = useRef<HTMLDivElement>(null)

    const [rotateTemp, setRotateTemp] = useState<number>(0)
    const [rotatePM, setRotatePM] = useState<number>(0)

    const [widthDevice, setWidthDevice] = useState<number>(CONSTANT_WIDTH.se) // ref by 5/SE

    useEffect(() => {
        setWidthDevice(divRef?.current?.offsetWidth || CONSTANT_WIDTH.se)
        setRotateTemp(tempActive ? 1 : 0)
        setRotatePM(pmActive ? 1 : 0)
    }, [tempActive, pmActive, divRef])

    const isIp8 = widthDevice > CONSTANT_WIDTH.se

    return (
        <div ref={divRef}>
            <Card
                className="shadow"
                bodyStyle={{padding: 0, marginBottom: -20}}
                style={{borderRadius: '12px', marginBottom: isIp8 ? 38 : 30}}
            >
                <Typography.Text
                    style={{
                        position: 'absolute',
                        padding: 15
                    }}
                >
                    My Home
                </Typography.Text>

                <Card
                    className="shadow"
                    bodyStyle={{padding: '12px'}}
                    style={{
                        position: 'absolute',
                        right: '10%',
                        bottom: isIp8 ? 30 : 25,
                        width: 98,
                        zIndex: 1,
                        borderWidth: 0,
                        borderRadius: 12,
                        lineHeight: isIp8 ? 1.7 : 1.2,
                    }}
                >
                    <Row justify="center">
                        <Typography.Text>
                            Indoor
                        </Typography.Text>
                    </Row>

                    <Row justify="center">
                        <Typography.Text style={{color: tempActive ? COLORS.green : COLORS.red, fontSize: '28px'}}>
                            35 c
                        </Typography.Text>
                    </Row>

                    <Row align="middle" justify="space-around" style={{marginTop: '4px', marginBottom: '6px'}}>
                        <Typography.Text style={{color: pmActive ? COLORS.green : COLORS.red}}>
                            AQI
                        </Typography.Text>
                        <Typography.Text style={{color: pmActive ? COLORS.green : COLORS.red, fontSize: '28px'}}>
                            60
                        </Typography.Text>
                    </Row>

                    <Row justify="space-around">
                        <Image
                            preview={false}
                            src={IconPM}
                        />
                        <Typography.Text style={{color: COLORS.green, fontSize: 18}}>
                            50
                        </Typography.Text>
                    </Row>

                    <Row justify="space-around" style={{marginTop: 10}}>
                        <Image
                            preview={false}
                            src={IconCarbon}
                        />
                        <Typography.Text style={{color: COLORS.green, fontSize: 18}}>
                            40
                        </Typography.Text>
                    </Row>
                </Card>

                <div style={{textAlign: 'right', marginTop: '12px'}}>
                    <Col>
                        <div style={{display: 'flex'}}>
                            <img
                                className="image"
                                src={tempActive ? IconFanActive : IconFanInActive}
                                alt="icon_fan1"
                                width={26}
                                // @ts-ignore
                                rotate={rotateTemp}
                                style={{
                                    position: 'absolute',
                                    zIndex: 1,
                                    top: isIp8 ? 79 : 62,
                                    left: isIp8 ? 92 : 59
                                }}
                            />
                        </div>
                    </Col>
                    <Image
                        preview={false}
                        src={tempActive || pmActive ? ImageHomeActive : ImageHome}
                        style={{height: isIp8 ? 'auto' : '340px', overflow: 'hidden'}}
                    />
                    <Col>
                        <div style={{display: 'flex'}}>
                            <img
                                className="image"
                                src={pmActive ? IconFanActive : IconFanInActive}
                                alt="icon_fan2"
                                width={26}
                                // @ts-ignore
                                rotate={rotatePM}
                                style={{
                                    position: 'absolute',
                                    zIndex: 1,
                                    bottom: isIp8 ? 124 : 101,
                                    left: isIp8 ? 109 : 74,
                                }}
                            />
                        </div>
                    </Col>
                </div>
            </Card>
        </div>
    )
}

export default MyHome
