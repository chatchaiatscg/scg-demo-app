import React from "react";

import Routes from "./routes";
import {COLORS} from "../utils/constant";

const LayoutComponent: React.FunctionComponent = (): React.ReactElement => {
    return (
        <div style={{minHeight: "100vh"}}>
            <div style={{backgroundColor: COLORS.white}}>
                <Routes />
            </div>
        </div>
    )
}

export default LayoutComponent
