import React, {useEffect, useState} from 'react';
import {Image, Row, Typography} from "antd";
import {Line} from '@ant-design/charts';

import {IChartLine} from "../model/chart-line";
import {chartLine} from "../mock/chart-line";

import IconClock from '../../../assets/icon/clock.png'
import {COLORS} from "../../../core/utils/constant";

const ChartLine: React.FunctionComponent = (): React.ReactElement => {
    const [data, setData] = useState<IChartLine[]>([]);

    useEffect(() => {
        setData(chartLine)
    }, [])

    const config = {
        data,
        height: 200,
        xField: 'time',
        yField: 'value',
        smooth: true,
        color: COLORS.primary,
        lineWidth: 2
    };

    return (
        <>
            <Row align="middle" style={{marginBottom: '16px'}}>
                <Image
                    alt={`icon_${IconClock}`}
                    src={IconClock}
                />
                <Typography.Text style={{marginLeft: '8px'}}>
                    Last 24 hours
                </Typography.Text>
            </Row>
            <Line {...config} />
        </>
    )
};

export default ChartLine;
