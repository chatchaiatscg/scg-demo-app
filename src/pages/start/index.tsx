import React from "react";
import {Link} from "react-router-dom";

import start from 'assets/images/start.png'

const Start: React.FC = (): React.ReactElement => {

    return (
        <>
            <Link to="/">
                <img
                    alt="start"
                    src={start}
                    style={{objectFit: 'contain', width: '100%', height: '100vh'}}
                />
            </Link>
        </>
    )
}

export default Start