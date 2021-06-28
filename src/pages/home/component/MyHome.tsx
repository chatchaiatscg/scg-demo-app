import React, {useEffect, useRef, useState} from "react";
import {Card, Image, Typography, Row, Col} from 'antd';

import {COLORS} from "../../../core/utils/constant";

import {IModelHome} from "../model/my-home";

import ImageHome from '../../../assets/images/groupFan.png'
import ImageHomeActive from '../../../assets/images/groupFanActive.png'
import IconPM from '../../../assets/icon/pm.png'
import IconCarbon from '../../../assets/icon/carbon.png'

import IconFanActive from '../../../assets/icon/fanActive.png'
import IconFanInActive from '../../../assets/icon/fanInActive.png'

interface IProps {
    myHome: IModelHome[]
    homeStatus: IModelHome[]
}

const CONSTANT_WIDTH = {
    se: 288,
    ten: 373
}

const MyHome: React.FunctionComponent<IProps> = ({myHome, homeStatus}): React.ReactElement => {
    const divRef = useRef<HTMLDivElement>(null)

    const [widthDevice, setWidthDevice] = useState<number>(CONSTANT_WIDTH.se) // ref by 5/SE

    useEffect(() => {
        setWidthDevice(divRef?.current?.offsetWidth || CONSTANT_WIDTH.se)
    }, [divRef])

    const isIpX = widthDevice >= CONSTANT_WIDTH.ten
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

                {/* detail status */}
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
                    {
                        myHome.map((home, index) => {
                            return (
                                <Row
                                    key={`${home.device_id}_${home.device_type}`}
                                    align="middle"
                                    justify="space-around"
                                    style={{marginTop: '4px', marginBottom: '6px'}}
                                >
                                    {index === 0 || index === 1 ?
                                        <Typography.Text
                                            style={{
                                                color: homeStatus[1]?.value === '1' ? COLORS.green : COLORS.red
                                            }}>
                                            {index === 1 && 'AQI'}
                                        </Typography.Text>
                                        :
                                        <Image
                                            alt={`icon_${IconPM}`}
                                            src={index === 2 ? IconPM : IconCarbon}
                                        />
                                    }

                                    {index === 0 ?
                                        <Typography.Text
                                            style={{
                                                color: homeStatus[0]?.value === '1' ? COLORS.green : COLORS.red,
                                                fontSize: index === 0 ? '20px' : '32px'
                                            }}
                                        >
                                            {parseInt(home.value).toFixed(1)} {index === 0 && '°C'}
                                        </Typography.Text>
                                        : index === 1 ?
                                            <Typography.Text
                                                style={{
                                                    color: homeStatus[1]?.value === '1' ? COLORS.green : COLORS.red,
                                                    fontSize: index === 1 ? '20px' : '32px'
                                                }}
                                            >
                                                {home.value}
                                            </Typography.Text>
                                            :
                                            <Typography.Text
                                                style={{
                                                    color: COLORS.green,
                                                    fontSize: '12px'
                                                }}>
                                                {parseInt(home.value)}
                                            </Typography.Text>
                                    }
                                </Row>
                            )
                        })
                    }
                </Card>

                <div style={{textAlign: 'right', marginTop: '12px'}}>
                    <Col>
                        <div style={{display: 'flex'}}>
                            <img
                                className="image"
                                src={homeStatus[0]?.value === '1' ? IconFanActive : IconFanInActive}
                                alt="icon_fan1"
                                width={26}
                                // @ts-ignore
                                rotate={homeStatus[0]?.value === '1' ? 1 : 0}
                                style={{
                                    position: 'absolute',
                                    zIndex: 1,
                                    top: isIpX ? 79 : isIp8 ? 78.5 : 62,
                                    left: isIpX ? 124 : isIp8 ? 87.5 : 58,
                                }}
                            />
                        </div>
                    </Col>
                    <Image
                        preview={false}
                        src={homeStatus[0]?.value === '1' || homeStatus[1]?.value === '1' ? ImageHomeActive : ImageHome}
                        style={{height: isIp8 ? 'auto' : '340px', overflow: 'hidden'}}
                    />
                    <Col>
                        <div style={{display: 'flex'}}>
                            <img
                                className="image"
                                src={homeStatus[1]?.value === '1' ? IconFanActive : IconFanInActive}
                                alt="icon_fan2"
                                width={26}
                                // @ts-ignore
                                rotate={homeStatus[1]?.value === '1' ? 1 : 0}
                                style={{
                                    position: 'absolute',
                                    zIndex: 1,
                                    bottom: isIpX ? 125 : isIp8 ? 125 : 101,
                                    left: isIpX ? 140 : isIp8 ? 104 : 73
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
