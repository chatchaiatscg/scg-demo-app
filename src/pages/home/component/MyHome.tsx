import React, {useEffect} from "react";
import {Card, Image, Typography, Row} from 'antd';

import {COLORS} from "../../../core/utils/constant";

import ImageHome from '../../../assets/images/groupFan.png'
import ImageHomeActive from '../../../assets/images/groupFanActive.png'
import IconPM from '../../../assets/icon/pm.png'
import IconCarbon from '../../../assets/icon/carbon.png'
// import IconFanActive from '../../../assets/icon/fanActive.png'

interface IProps {
    status: boolean
}

const MyHome: React.FunctionComponent<IProps> = ({status}): React.ReactElement => {

    useEffect(() => {
        console.log('status')
        if (status) {

            return
        }
    }, [status])

    return (
        <>
            <Card
                bodyStyle={{padding: 0, marginBottom: -20}}
                style={{
                    borderRadius: '13px',
                    aspectRatio: '3.75/4',
                }}
            >
                <Typography.Text style={{
                    position: 'absolute',
                    padding: 15
                }}>
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
                        <Typography.Text style={{color: status ? COLORS.green : COLORS.red, fontSize: '30px'}}>
                            35 c
                        </Typography.Text>
                    </Row>

                    <Row align="middle" justify="space-between">
                        <Typography.Text style={{color: status ? COLORS.green : COLORS.red}}>
                            AQI
                        </Typography.Text>
                        <Typography.Text style={{color: status ? COLORS.green : COLORS.red, fontSize: '30px'}}>
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

                {/*<Image*/}
                {/*    preview={false}*/}
                {/*    src={IconFanActive}*/}
                {/*    style={{position: 'absolute', left: '190%', top: 75, zIndex: 1}}*/}
                {/*    width={30}*/}
                {/*/>*/}
                <div style={{textAlign: 'right'}}>
                    <Image
                        preview={false}
                        src={status ? ImageHomeActive : ImageHome}
                    />
                </div>
            </Card>
        </>
    )
}

export default MyHome
