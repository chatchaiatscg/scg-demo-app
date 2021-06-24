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

    return (
        <div ref={divRef}>
            <Card
                bodyStyle={{padding: 0, marginBottom: -20}}
                style={{
                    borderRadius: '13px',
                    aspectRatio: '3.75/4',
                }}
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
                    bodyStyle={{padding: 15}}
                    style={{
                        position: 'absolute',
                        right: '10%',
                        bottom: '7%',
                        width: 98,
                        height: 221,
                        zIndex: 1,
                        borderWidth: 0,
                        borderRadius: 12
                    }}
                >
                    <Row justify="center">
                        <Typography.Text>
                            Indoor
                        </Typography.Text>
                    </Row>

                    <Row justify="center">
                        <Typography.Text style={{color: tempActive ? COLORS.green : COLORS.red, fontSize: '30px'}}>
                            35 c
                        </Typography.Text>
                    </Row>

                    <Row align="middle" justify="space-between">
                        <Typography.Text style={{color: pmActive ? COLORS.green : COLORS.red}}>
                            AQI
                        </Typography.Text>
                        <Typography.Text style={{color: pmActive ? COLORS.green : COLORS.red, fontSize: '30px'}}>
                            60
                        </Typography.Text>
                    </Row>

                    <Row justify="space-around">
                        <Image
                            preview={false}
                            src={IconPM}
                        />
                        <Typography.Text style={{color: COLORS.green, fontSize: 16}}>
                            50
                        </Typography.Text>
                    </Row>

                    <Row justify="space-around" style={{marginTop: 10}}>
                        <Image
                            preview={false}
                            src={IconCarbon}
                        />
                        <Typography.Text style={{color: COLORS.green, fontSize: 16}}>
                            40
                        </Typography.Text>
                    </Row>
                </Card>

                <div style={{textAlign: 'right'}}>
                    <Col>
                        <div style={{display: 'flex'}}>

                            <img
                                className="image"
                                src={tempActive ? IconFanActive : IconFanInActive}
                                alt="icon_fan1"
                                width={30}
                                // @ts-ignore
                                rotate={rotateTemp}
                                style={{
                                    position: 'absolute',
                                    zIndex: 1,
                                    top: widthDevice > CONSTANT_WIDTH.se ? 77 : 69,
                                    left: widthDevice > CONSTANT_WIDTH.se ? 91 : 57
                                }}
                            />
                        </div>
                    </Col>
                    <Image
                        preview={false}
                        src={tempActive || pmActive ? ImageHomeActive : ImageHome}
                    />
                    <Col>
                        <div style={{display: 'flex'}}>
                            <img
                                className="image"
                                src={pmActive ? IconFanActive : IconFanInActive}
                                alt="icon_fan2"
                                width={30}
                                // @ts-ignore
                                rotate={rotatePM}
                                style={{
                                    width: '30px',
                                    position: 'absolute',
                                    zIndex: 1,
                                    bottom: widthDevice > CONSTANT_WIDTH.se ? 122 : 111,
                                    left: widthDevice > CONSTANT_WIDTH.se ? 108 : 72,
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
