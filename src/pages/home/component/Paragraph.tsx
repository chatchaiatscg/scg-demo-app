import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

interface IParagraph { }

const Paragraph: React.FC<IParagraph> = (): React.ReactElement => {

    const x = true
    if (x) {
        return (
            <>
                <div className="text1" style={{marginTop: '3vh', marginLeft: '-2%', fontSize: '3vw'}}>
                    <span style={{color: '#ED2324'}}>
                        SCG{" "}
                    </span>
                    Active AIRquality
                </div>
                <div>
                    <div style={{marginTop: '5vh', marginLeft: '3.75vw', flexWrap: 'wrap'}}>

                        <div style={{width: '95%'}}>
                            <span className="text2">สถานการณ์จำลอง</span><br /><br />
                            <span className="text3" style={{lineHeight: 2}}>
                                เมื่อบ้านเจอสถานการณ์มลพิษฝุ่น PM 2.5 และถูกตรวจจับด้วยอุปกรณ์
                                <br />Sensor ระบบ <span className="text3-bold">SCG Active AIR Quality</span> จะเริ่มต้นทำงานโดยอัตโนมัต
                            </span>
                        </div>

                        <div style={{marginTop: '10%'}} />

                        <div style={{width: '95%'}}>
                            <span className="text2">ระบบ SCG Active AIRquality คืออะไร ทำงานอย่างไร</span><br /><br />
                            <span className="text3" style={{lineHeight: 2}}>
                                เป็นระบบจัดการคุณภาพอากาศภายในบ้าน เพื่อสร้างอากาศคุณภาพดี สะอาด ปลอดภัย
                                ด้วยการทำงานของอุปกรณ์ในระบบคือ 
                                <span className="text3-bold"> Supply Air Ventilator </span>
                                ที่จะช่วยกรองอากาศดี
                                เข้าบ้านตั้งแต่แรกโดยการสร้างให้อากาศเป็น Positive Pressure เพื่อให้อากาศเสีย
                                ถูกดันออกทางช่องว่างต่างๆของบ้านจนทำให้มลภาวะนอกบ้าน ไม่สามารถ
                                เข้าสู่ภายในบ้านได้  ซึ่งเป็นหลักการทำงานที่แตกต่างกับเครื่องฟอกอากาศทั่วไป
                            </span>
                        </div>

                        <div style={{marginTop: '15%'}} />

                        <div style={{width: '100%'}}>
                            <Box>
                                <span className="text2">ประโยชน์ที่ได้รับหลังจากติดตั้งระบบ SCG Active AIRquality</span>
                                <div style={{marginTop: '24px'}} />

                                <Grid container direction="row">
                                    <ul style={{padding: 0, marginLeft: '14px'}}>
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
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <div className="text1" style={{marginTop: '3vh', marginLeft: '-2%', fontSize: '3vw'}}>
                <span style={{color: '#ED2324'}}>
                    SCG{" "}
                </span>
                Active AIRflow
            </div>
            <div>
                <div style={{marginTop: '5vh', marginLeft: '3.75vw', flexWrap: 'wrap'}}>

                    <div style={{width: '95%'}}>
                        <span className="text2">สถานการณ์จำลอง</span><br /><br />
                        <span className="text3" style={{lineHeight: 2}}>
                            เมื่อบ้านมีอุณหภูมิ สูงขึ้น และถูกตรวจจับด้วยอุปกรณ์ Sensor
                            <br /><span className="text3-bold">ระบบ SCG Active AIRflow</span> จะเริ่มต้นทำงานโดยอัตโนมัติ
                        </span>
                    </div>

                    <div style={{marginTop: '10%'}} />

                    <div style={{width: '95%'}}>
                        <span className="text2">ระบบ SCG Active AIRflow คืออะไร ทำงานอย่างไร</span><br /><br />
                        <span className="text3" style={{lineHeight: 2}}>
                            ออกแบบมาเพื่อ แก้ปัญหาบ้านร้อน อบอ้าวจากสาเหตุ ด้วยหลักการระบายและ
                            ถ่ายเทความร้อนจากตัวบ้านและโถงหลังคา ซึ่งเป็นพื้นที่หลักของบ้านที่
                            สะสมความร้อนระหว่างวันมากที่สุด ช่วยให้บ้านเย็นลง 2-5 องศา
                        </span>
                    </div>

                    <div style={{marginTop: '20%'}} />

                    <div style={{width: '100%'}}>
                        <Box>
                            <span className="text2">ประโยชน์ที่ได้รับหลังจากติดตั้งระบบ SCG Active AIRflow</span>
                            <div style={{marginTop: '24px'}} />

                            <Grid container direction="row">
                                <ul style={{padding: 0, marginLeft: '14px'}}>
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
                </div>
            </div>
        </>
    )
}

export default Paragraph