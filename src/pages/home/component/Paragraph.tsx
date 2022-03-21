import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {ContainerHeadParagraph, ContainerSubParagraph, MarginParagraph1, MarginSubParagraph, MiddleParagraph, ULParagraph} from "./Home.styles";
import {Title2, Title3} from "component/common/Font.styles";

interface IParagraph {
    temp: boolean
    pm: boolean
}

const Paragraph: React.FC<IParagraph> = ({temp, pm}): React.ReactElement => {
    if (pm) {
        return (
            <>
                <ContainerHeadParagraph className="text1">
                    <span style={{color: '#ED2324', paddingTop: 0}}>
                        SCG{" "}
                    </span>
                    Active AIRquality
                </ContainerHeadParagraph>
                <div>
                    <ContainerSubParagraph>
                        <div style={{width: '95%'}}>
                            <Title2>สถานการณ์จำลอง</Title2>
                            <MarginSubParagraph />
                            <Title3 style={{lineHeight: 2}}>
                                เมื่อบ้านเจอสถานการณ์มลพิษฝุ่น PM 2.5 และถูกตรวจจับด้วยอุปกรณ์
                                <br />Sensor ระบบ <Title3 className="bold">SCG Active AIR Quality</Title3> จะเริ่มต้นทำงานโดยอัตโนมัต
                            </Title3>
                        </div>

                        <MarginParagraph1 />

                        <MiddleParagraph>
                            <Title2>ระบบ SCG Active AIRquality คืออะไร ทำงานอย่างไร</Title2>
                            <MarginSubParagraph />
                            <Title3 style={{lineHeight: 2}}>
                                เป็นระบบจัดการคุณภาพอากาศภายในบ้าน เพื่อสร้างอากาศคุณภาพดี สะอาด ปลอดภัย
                                ด้วยการทำงานของอุปกรณ์ในระบบคือ
                                <Title3 className="bold"> Supply Air Ventilator </Title3>
                                ที่จะช่วยกรองอากาศดี
                                เข้าบ้านตั้งแต่แรกโดยการสร้างให้อากาศเป็น Positive Pressure เพื่อให้อากาศเสีย
                                ถูกดันออกทางช่องว่างต่างๆของบ้านจนทำให้มลภาวะนอกบ้าน ไม่สามารถ
                                เข้าสู่ภายในบ้านได้  ซึ่งเป็นหลักการทำงานที่แตกต่างกับเครื่องฟอกอากาศทั่วไป
                            </Title3>
                        </MiddleParagraph>

                        <div style={{width: '100%'}}>
                            <Box>
                                <Title2>ประโยชน์ที่ได้รับหลังจากติดตั้งระบบ SCG Active AIRquality</Title2>

                                <Grid container direction="row">
                                    <MarginSubParagraph />
                                    <ULParagraph />
                                    <ul style={{padding: 0}}>
                                        <li className="text3">กรองฝุ่น PM2.5</li>
                                        <li className="text3">กรองเชื้อโรค ไวรัส แบคทีเรีย</li>
                                    </ul>

                                    <ul>
                                        <li className="text3">เพิ่มออกซิเจนในบ้าน เพิ่มคุณภาพในการนอน</li>
                                        <li className="text3">ปรับความชื้นในบ้านให้สมดุล จึงรู้สึกสบายตัว</li>
                                    </ul>
                                </Grid>
                            </Box>
                        </div>
                    </ContainerSubParagraph>
                </div>
            </>
        )
    }

    return (
        <>
            <ContainerHeadParagraph className="text1">
                <span style={{color: '#ED2324'}}>
                    SCG{" "}
                </span>
                Active AIRflow
            </ContainerHeadParagraph>
            <div>
                <ContainerSubParagraph>
                    <div style={{width: '95%'}}>
                        <Title2>สถานการณ์จำลอง</Title2>
                        <MarginSubParagraph />
                        <Title3 style={{lineHeight: 2}}>
                            เมื่อบ้านมีอุณหภูมิ สูงขึ้น และถูกตรวจจับด้วยอุปกรณ์ Sensor
                            <br /><Title3 className="bold">ระบบ SCG Active AIRflow</Title3> จะเริ่มต้นทำงานโดยอัตโนมัติ
                        </Title3>
                    </div>

                    <MarginParagraph1 />

                    <MiddleParagraph>
                        <Title2>ระบบ SCG Active AIRflow คืออะไร ทำงานอย่างไร</Title2>
                        <MarginSubParagraph />
                        <Title3 style={{lineHeight: 2}}>
                            ออกแบบมาเพื่อ แก้ปัญหาบ้านร้อน อบอ้าวจากสาเหตุ ด้วยหลักการระบายและ
                            ถ่ายเทความร้อนจากตัวบ้านและโถงหลังคา ซึ่งเป็นพื้นที่หลักของบ้านที่
                            สะสมความร้อนระหว่างวันมากที่สุด ช่วยให้บ้านเย็นลง 2-5 องศา
                        </Title3>
                    </MiddleParagraph>

                    <div style={{width: '100%'}}>
                        <Box>
                            <Title2>ประโยชน์ที่ได้รับหลังจากติดตั้งระบบ SCG Active AIRflow</Title2>

                            <Grid container direction="row">
                                <MarginSubParagraph />
                                <ULParagraph />
                                <ul style={{padding: 0}}>
                                    <li className="text3">ลดอุณหภูมิภายในไม่ร้อนอบอ้าว</li>
                                    <li className="text3">ระบายเเละถ่ายเทอากาศตลอดวัน</li>
                                </ul>

                                <ul>
                                    <li className="text3">สร้างอากาศดีในบ้านป้องกันฝุ่นเเละเชื้อรา</li>
                                    <li className="text3">ระบายเเละถ่ายเทอากาศตลอดวัน</li>
                                </ul>
                            </Grid>
                        </Box>
                    </div>
                </ContainerSubParagraph>
            </div>
        </>
    )
}

export default Paragraph