import React from "react";

import IconFanActive from '../../../assets/icon/fanActive.png'
import IconFanInActive from '../../../assets/icon/fanInActive.png'
import {IModelHome} from "../model/my-home";

interface IFan {
    homeStatus: IModelHome[]
}

const Fan: React.FC<IFan> = ({homeStatus}): React.ReactElement => {
    return (
        <>
            <img
                className="image"
                src={homeStatus[0]?.value === '1' ? IconFanActive : IconFanInActive}
                alt="icon_fan1"
                width={26}
                // @ts-ignore
                rotate={homeStatus[0]?.value === '1' ? 1 : 0}
                style={{
                    position: 'absolute',
                    // zIndex: 1,
                    top: '20%',
                    left: '35%',
                }} />
            <img
                className="image"
                src={homeStatus[1]?.value === '1' ? IconFanActive : IconFanInActive}
                alt="icon_fan2"
                width={26}
                // @ts-ignore
                rotate={homeStatus[1]?.value === '1' ? 1 : 0}
                style={{
                    position: 'absolute',
                    // zIndex: 1,
                    top: '65%',
                    left: '45%',
                    // bottom: 1 ? 125 : 1 ? 125 : 101,
                    // left: 1 ? 140 : 1 ? 104 : 73
                }} />
            {/* <Image
                preview={false}
                src={homeStatus[0]?.value === '1' || homeStatus[1]?.value === '1' ? ImageHomeActive : ImageHome}
                style={{height: 1 ? 'auto' : '340px', overflow: 'hidden'}}
            /> */}
        </>
    )
}

export default Fan