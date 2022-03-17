import React from "react";
import Card from '@mui/material/Card';

import {COLORS} from "../../../core/utils/constant";
import {IModelHome} from "../model/my-home";

interface IHomeStatus {
    myHome: IModelHome[]
}

const HomeStatus: React.FC<IHomeStatus> = ({myHome}): React.ReactElement => {
    return (
        <Card
            className="shadow"
            // bodyStyle={{padding: '12px'}}
            style={{
                position: 'absolute',
                right: '10%',
                bottom: 1 ? 40 : 25,
                minWidth: '98px',
                zIndex: 1,
                borderWidth: 0,
                borderRadius: 12,
                lineHeight: 1 ? 1.7 : 1.5,
            }}
        >
            <div >
                <span>
                    Indoor
                </span>
            </div>
            {
                myHome.map((home, index) => {
                    return (
                        <div
                            key={`${home.device_id}_${home.device_type}`}
                            // justify="space-between"
                            style={{marginTop: '4px', marginBottom: '4px'}}
                        >
                            {index === 0 || index === 1 ?
                                <span
                                    style={{
                                        color: index === 1 && parseInt(home.value) > 150 ? COLORS.red : parseInt(home.value) <= 50 ? COLORS.green : COLORS.orange,
                                        fontSize: '14px',
                                        fontFamily: 'Kanit-light'
                                    }}>
                                    {index === 1 && 'AQI'}
                                </span>
                                :
                                <span
                                    style={{
                                        color: index === 2 ? parseInt(home.value) > 65 ? COLORS.red : parseInt(home.value) <= 15 ? COLORS.green : COLORS.orange : COLORS.green,
                                        fontSize: '14px',
                                        textAlign: 'left',
                                        fontFamily: 'Kanit-light'
                                    }}>
                                    {index === 2 ? 'PM2.5' : 'CO2'}
                                </span>
                            }

                            {index === 0 ?
                                <span
                                    style={{
                                        color: parseFloat(home.value) > 36 ? COLORS.red : parseFloat(home.value) < 34 ? COLORS.green : COLORS.orange,
                                        fontSize: '24px',
                                        textAlign: 'center',
                                        flex: 1
                                    }}
                                >
                                    {parseFloat(home.value).toFixed(1)} °C
                                </span>
                                : index === 1 ?
                                    <span
                                        style={{
                                            color: parseInt(home.value) > 150 ? COLORS.red : parseInt(home.value) <= 50 ? COLORS.green : COLORS.orange,
                                            fontSize: '21px',
                                        }}
                                    >
                                        {home.value}
                                    </span>
                                    :
                                    <span
                                        style={{
                                            color: index === 2 ? parseInt(home.value) > 65 ? COLORS.red : parseInt(home.value) <= 15 ? COLORS.green : COLORS.orange : COLORS.green,
                                            fontSize: '15px',
                                            minWidth: '38px',
                                            textAlign: 'right'
                                        }}>
                                        {parseInt(home.value)}
                                    </span>
                            }
                        </div>
                    )
                })
            }
        </Card>
    )
}

export default HomeStatus