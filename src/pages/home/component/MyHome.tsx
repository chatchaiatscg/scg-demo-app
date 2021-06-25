import React, {useEffect, useRef, useState} from "react";
import {Card, Image, Typography, Row, Col, message} from 'antd';

import {COLORS} from "../../../core/utils/constant";

import ImageHome from '../../../assets/images/groupFan.png'
import ImageHomeActive from '../../../assets/images/groupFanActive.png'
import IconPM from '../../../assets/icon/pm.png'
import IconCarbon from '../../../assets/icon/carbon.png'

import IconFanActive from '../../../assets/icon/fanActive.png'
import IconFanInActive from '../../../assets/icon/fanInActive.png'
import {myHomeData} from "../mock/my-home";
import {IModelHome, IActiveState} from "../model/my-home";
import useAxios from "../../../hooks/useAxios";
import {HomeService, IHomeService} from "../service/my-home";
import {AxiosInstance} from "axios";

interface IProps {
    activeState: IActiveState
}

const CONSTANT_WIDTH = {
    se: 288
}

const INTERVAL_TEMP = 5500
const INTERVAL_PM = 2000

const MyHome: React.FunctionComponent<IProps> = ({activeState}): React.ReactElement => {
    const divRef = useRef<HTMLDivElement>(null)

    const [myHome, setMyHome] = useState<IModelHome>(myHomeData)
    const [widthDevice, setWidthDevice] = useState<number>(CONSTANT_WIDTH.se) // ref by 5/SE

    const {service} = useAxios<IHomeService>((axiosInstance: AxiosInstance) => HomeService(axiosInstance))
    let intervalTemp: NodeJS.Timeout | null = null
    let intervalPM: NodeJS.Timeout | null = null

    const fetchMyHome = async () => {
        try {
            const response = await service().getMyHome()
            setMyHome(response)
        } catch (e) {
            message.error('Something went wrong!')
        }
    }

    useEffect(() => {
        // TODO fetch status
        fetchMyHome().then()
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        setWidthDevice(divRef?.current?.offsetWidth || CONSTANT_WIDTH.se)
        if (activeState.tempActive) {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            intervalTemp = setInterval(() => {
                setMyHome(prevState => {
                    if (prevState.indoor <= 25) {
                        intervalTemp && clearInterval(intervalTemp)
                        return {...prevState, indoor: prevState.indoor}
                    }
                    return {...prevState, indoor: prevState.indoor - 1}
                })
            }, INTERVAL_TEMP)
        } else {
            intervalTemp && clearInterval(intervalTemp)
        }
        if (activeState.pmActive) {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            intervalPM = setInterval(() => {
                setMyHome(prevState => {
                    if (prevState.aqi <= 40) {
                        intervalPM && clearInterval(intervalPM)
                        return {...prevState, aqi: prevState.aqi}
                    }
                    return {...prevState, aqi: prevState.aqi - 1}
                })
            }, INTERVAL_PM)
        } else {
            intervalPM && clearInterval(intervalPM)
        }
    }, [divRef, activeState])

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
                        <Typography.Text
                            style={{color: activeState.tempActive ? COLORS.green : COLORS.red, fontSize: '28px'}}>
                            {myHome.indoor} c
                        </Typography.Text>
                    </Row>

                    <Row align="middle" justify="space-around" style={{marginTop: '4px', marginBottom: '6px'}}>
                        <Typography.Text style={{color: activeState.pmActive ? COLORS.green : COLORS.red}}>
                            AQI
                        </Typography.Text>
                        <Typography.Text
                            style={{color: activeState.pmActive ? COLORS.green : COLORS.red, fontSize: '28px'}}>
                            {myHome.aqi}
                        </Typography.Text>
                    </Row>

                    <Row justify="space-around">
                        <Image
                            preview={false}
                            src={IconPM}
                        />
                        <Typography.Text style={{color: COLORS.green, fontSize: 18}}>
                            {myHome.pm}
                        </Typography.Text>
                    </Row>

                    <Row justify="space-around" style={{marginTop: 10}}>
                        <Image
                            preview={false}
                            src={IconCarbon}
                        />
                        <Typography.Text style={{color: COLORS.green, fontSize: 18}}>
                            {myHome.co}
                        </Typography.Text>
                    </Row>
                </Card>

                <div style={{textAlign: 'right', marginTop: '12px'}}>
                    <Col>
                        <div style={{display: 'flex'}}>
                            <img
                                className="image"
                                src={activeState.tempActive ? IconFanActive : IconFanInActive}
                                alt="icon_fan1"
                                width={26}
                                // @ts-ignore
                                rotate={activeState.tempActive ? 1 : 0}
                                style={{
                                    position: 'absolute',
                                    zIndex: 1,
                                    top: isIp8 ? 78.5 : 62,
                                    left: isIp8 ? 93 : 59
                                }}
                            />
                        </div>
                    </Col>
                    <Image
                        preview={false}
                        src={activeState.tempActive || activeState.pmActive ? ImageHomeActive : ImageHome}
                        style={{height: isIp8 ? 'auto' : '340px', overflow: 'hidden'}}
                    />
                    <Col>
                        <div style={{display: 'flex'}}>
                            <img
                                className="image"
                                src={activeState.pmActive ? IconFanActive : IconFanInActive}
                                alt="icon_fan2"
                                width={26}
                                // @ts-ignore
                                rotate={activeState.pmActive ? 1 : 0}
                                style={{
                                    position: 'absolute',
                                    zIndex: 1,
                                    bottom: isIp8 ? 124 : 101,
                                    left: isIp8 ? 110 : 74,
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
