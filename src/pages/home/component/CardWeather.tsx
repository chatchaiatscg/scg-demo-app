import React, {useEffect, useState} from "react";
import {Row, Col, Typography, Card, Image, Space} from 'antd';

import {COLORS} from "../../../core/utils/constant";
import {cardWeather} from '../mock/card-weather'
import {ICardWeather} from "../model/card-weather";

interface IProps {
    name: string
    icon: string
}

const CardWeather: React.FunctionComponent<IProps> = ({name, icon}): React.ReactElement => {
    const [weather, setWeather] = useState<ICardWeather>(cardWeather)
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        setWeather(cardWeather)
        setLoading(false)
    }, [name])

    return (
        <>
            <Card
                loading={loading}
                title={
                    <Space>
                        <Image
                            preview={false}
                            alt={`icon_${name}`}
                            src={icon}
                        />
                        <Typography.Text>
                            {name}
                        </Typography.Text>
                    </Space>
                }
                style={{
                    backgroundColor: COLORS.lightBlue,
                    borderRadius: '20px'
                }}
            >
                <Row justify="space-between">
                    <Col>
                        <Typography.Text style={{whiteSpace: 'pre-line'}}>
                            Temp{'\n'} (Celsius)
                        </Typography.Text>
                    </Col>
                    <Col>
                        <Typography.Text style={{whiteSpace: 'pre-line'}}>
                            {`${weather.temp}`}
                        </Typography.Text>
                    </Col>
                </Row>

                <Row justify="space-between" style={{marginTop: '8px'}}>
                    <Col>
                        <Typography.Text style={{whiteSpace: 'pre-line'}}>
                            PM 2.5{'\n'}
                            (µg./m3)
                        </Typography.Text>
                    </Col>
                    <Col>
                        <Typography.Text style={{whiteSpace: 'pre-line'}}>
                            {`${weather.pm}`}
                        </Typography.Text>
                    </Col>
                </Row>

                <Row justify="space-between" style={{marginTop: '8px'}}>
                    <Col>
                        <Typography.Text style={{whiteSpace: 'pre-line'}}>
                            Humidity{'\n'}
                            (%)
                        </Typography.Text>
                    </Col>
                    <Col>
                        <Typography.Text style={{whiteSpace: 'pre-line'}}>
                            {`${weather.humidity}`}
                        </Typography.Text>
                    </Col>
                </Row>

                <Row justify="space-between" style={{marginTop: '8px'}}>
                    <Col>
                        <Typography.Text style={{whiteSpace: 'pre-line'}}>
                            Co2{'\n'}
                            (ppm)
                        </Typography.Text>
                    </Col>
                    <Col>
                        <Typography.Text style={{whiteSpace: 'pre-line'}}>
                            {`${weather.co2}`}
                        </Typography.Text>
                    </Col>
                </Row>
            </Card>
        </>
    );
};

export default CardWeather;
