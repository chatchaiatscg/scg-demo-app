import React, {Suspense, useEffect, useState} from "react";
import {BrowserRouter} from "react-router-dom";

import {ACCESS_TOKEN} from "../utils/constant";

import LayoutComponent from "../../component/layout";
import Loading from "../../component/common/LoadingComp";
import {ErrorMsg} from "../../component/common/ToastMessage";

const AppContainer: React.FunctionComponent = (): React.ReactElement => {
    const [ready, setReady] = useState<boolean>(false)

    const initialApp = async () => {
        try {
            const token = window.sessionStorage.getItem(ACCESS_TOKEN)
            if (!token) {
                return
            }
        } catch (err) {
            ErrorMsg('initial App failed!')
            console.warn(err)
        }
        setReady(false)
    }

    useEffect(() => {
        initialApp().then()
        // eslint-disable-next-line
    }, [])

    if (ready) {
        return <Loading/>
    }

    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Suspense fallback={<Loading/>}>
                <LayoutComponent/>
            </Suspense>
        </BrowserRouter>
    );
};

export default AppContainer;
