import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {ContainerHeadParagraph, ContainerSubParagraph, MarginParagraph1, MarginSubParagraph, MiddleParagraph, ULParagraph, WidthULParagraph} from "./Home.styles";
import {Title1, Title2, Title3} from "component/common/Font.styles";

interface IParagraph {
    pm25: boolean
}

const Paragraph: React.FC<IParagraph> = ({pm25}): React.ReactElement => {
    if (pm25) {
        return (
            <>
                <br></br>
                <br></br>
                <br></br>
                <div>
                    <ContainerSubParagraph className="text1" sx={{lineHeight: 1}}>
                        <div style={{width: '95%'}}>
                            <Title1 style={{color: '#ED2324', fontSize: 48}} className="sub-title">
                                SCG <br />
                            </Title1>
                            <Title1 style={{lineHeight: 1, fontSize: 60}}>Active AIRquality</Title1>
                            <MarginSubParagraph />
                            <Title3 style={{lineHeight: 2}}>
                                เมื่อบ้านเจอสถานการณ์มลพิษฝุ่น PM 2.5 และถูกตรวจจับด้วยอุปกรณ์
                                <br />Sensor ระบบ <Title3 className="bold">SCG Active AIR Quality</Title3> จะเริ่มต้นทำงานโดยอัตโนมัต
                            </Title3>
                        </div>

                        <MarginParagraph1 />

                        <div style={{width: '80%'}}>
                        <MiddleParagraph>
                            <Title2>ระบบ SCG Active AIRquality คืออะไร ทำงานอย่างไร</Title2>
                            <MarginSubParagraph />
                            <Title3 style={{lineHeight: 2}}>
                                เป็นระบบจัดการคุณภาพอากาศภายในบ้าน เพื่อสร้างอากาศคุณภาพดี สะอาด 
                                ปลอดภัย ด้วยการทำงานของอุปกรณ์
                                <Title3 className="bold"> Supply Air Ventilator </Title3>
                                ที่จะช่วยกรองอากาศดี โดยการสร้างให้อากาศเป็น Positive 
                                Pressure ซึ่งทำให้มลภาวะนอกบ้าน ไม่สามารถ เข้าสู่ภายในบ้านได้  ซึ่งเป็นหลักการทำงานที่แตกต่าง
                                กับเครื่องฟอกอากาศทั่วไป
                            </Title3>
                        </MiddleParagraph>
                        </div>

                        <div style={{width: '100%'}}>
                            <Box>
                                <Title2>ประโยชน์ที่ได้รับหลังจากติดตั้งระบบ SCG Active AIRquality</Title2>

                                <Grid container direction="row">
                                    <MarginSubParagraph />
                                    <ULParagraph />
                                    <WidthULParagraph>
                                        <ul style={{padding: 0}}>
                                            <li className="text3">กรองฝุ่น PM2.5</li>
                                            <br></br>
                                            <li className="text3">กรองเชื้อโรค ไวรัส แบคทีเรีย</li>
                                        </ul>
                                    </WidthULParagraph>

                                    <ul>
                                        <li className="text3">เพิ่มออกซิเจนในบ้าน เพิ่มคุณภาพในการนอน</li>
                                        <br></br>
                                        <li className="text3">ปรับความชื้นในบ้านให้สมดุล</li>
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
            <br></br>
            <br></br>
            <br></br>
            <div>
                <ContainerSubParagraph className="text2" sx={{lineHeight: 1}}>
                    <div style={{width: '95%'}}>
                        <Title1 style={{color: '#ED2324', fontSize: 48}} className="sub-title">
                            SCG <br />
                        </Title1>
                        <Title1 style={{lineHeight: 1, fontSize: 60}}>Active AIRflow</Title1>
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
                        <div style={{width: '80%'}}>
                            <Title3 style={{lineHeight: 2}}>
                            ออกแบบมาเพื่อ แก้ปัญหาบ้านร้อน อบอ้าว ด้วยหลักการระบาย
                            และถ่ายเทความร้อนจากตัวบ้านและโถงหลังคาซึ่งเป็นพื้นที่หลักของบ้าน
                            ที่สะสมความร้อนระหว่างวัน ช่วยให้บ้านเย็นลง 2-5 องศา
                            </Title3>
                        </div>
                    </MiddleParagraph>

                    <div style={{width: '100%'}}>
                        <Box>
                            <Title2>ประโยชน์ที่ได้รับหลังจากติดตั้งระบบ SCG Active AIRflow</Title2>

                            <Grid container direction="row">
                                <MarginSubParagraph />
                                <ULParagraph />

                                <WidthULParagraph>
                                    <ul style={{padding: 0}}>
                                        <li className="text3">ลดอุณหภูมิภายในไม่ร้อนอบอ้าว</li>
                                        <br></br>
                                        <li className="text3">ลดพลังงานจากการใช้เครื่องปรับอากาศ</li>
                                    </ul>
                                </WidthULParagraph>
                                <ul>
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