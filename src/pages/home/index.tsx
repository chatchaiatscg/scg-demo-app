import React, {useEffect, useRef, useState} from "react";
import {Col, Image, Row} from 'antd';

import CardStatus from "./component/CardStatus";
import MyHome from "./component/MyHome";
import TopMenu from "./component/TopMenu";

import {IModelHome} from "./model/my-home";
import ImageBackground from "../../assets/images/bg.png";

interface IProps {
    myHome: IModelHome[]
    homeStatus: IModelHome[]
}

const Home: React.FunctionComponent<IProps> = ({myHome, homeStatus}): React.ReactElement => {
    const divRef = useRef<HTMLDivElement>(null)
    const [widthPhone, setWidthPhone] = useState<number>(320)

    useEffect(() => {
        setWidthPhone(divRef?.current?.offsetWidth || 320)
    }, [divRef])

    return (
        <div ref={divRef} style={{marginTop: -15}}>
            <Image
                preview={false}
                src={ImageBackground}
                style={{
                    position: 'absolute',
                    width: widthPhone,
                    height: '100vh'
                }}
            />
            <div style={{marginLeft: '19px', marginRight: '19px'}}>
                <TopMenu/>
                <MyHome myHome={myHome} homeStatus={homeStatus}/>
                <Row justify="space-between">
                    <Col span={11}>
                        <CardStatus label="System"/>
                    </Col>
                    <Col span={11}>
                        <CardStatus label="Devices status"/>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Home;
