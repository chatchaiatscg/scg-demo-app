import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

interface IParagraph {

}

const Paragraph: React.FC<IParagraph> = ({ }): React.ReactElement => {
    return (
        <>
            <div className="text1" style={{marginTop: '4vh', marginLeft: '-2%', fontSize: '3vw'}}>
                <span style={{color: '#ED2324'}}>
                    SCG{" "}
                </span>
                Active AIRflow
            </div>
            <div>
                <div style={{marginTop: '5vh', marginLeft: '3.75vw', flexWrap: 'wrap'}}>

                    <div style={{width: '90%'}}>
                        <span className="text2">ระบบ SCG Active AIRflow คืออะไร ทำงานอย่างไร</span>
                        <span className="text3">
                            ออกแบบมาเพื่อ แก้ปัญหาบ้านร้อน อบอ้าวจากสาเหตุ ด้วยหลักการระบายและ
                            ถ่ายเทความร้อนจากตัวบ้านและโถงหลังคา ซึ่งเป็นพื้นที่หลักของบ้านที่
                            สะสมความร้อนระหว่างวันมากที่สุด ช่วยให้บ้านเย็นลง 2-5 องศา
                        </span>
                    </div>

                    <div style={{marginTop: '40%'}} />

                    <div style={{width: '100%'}}>
                        <Box>
                            <span className="text2">ประโยชน์ที่ได้รับหลังจากติดตั้งระบบ SCG Active AIRflow</span>
                            <div style={{marginTop: '24px'}} />

                            <Grid container direction="row">
                                <ul style={{padding: 0, marginLeft: '14px'}}>
                                    <li className="text3">ลดอุณหภูมิภายในไม่ร้อนอบอ้าว</li>
                                    <li className="text3">ระบายเเละถ่ายเทอากาศตลอดวัน </li>
                                </ul>

                                <ul >
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