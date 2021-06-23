import React, {useState} from "react";
import {Row, Button} from 'antd';
import {useHistory} from 'react-router-dom'

import {COLORS} from "../../../core/utils/constant";
import {ITabMenu} from "../model/tab-menu";

const routeTabMenu: ITabMenu[] = [
    {name: 'Overview', path: '/', disable: false},
    {name: 'Members', path: '/members', disable: true},
    {name: 'Settings', path: '/setting', disable: true},
]

const styles = {
    active: {
        backgroundColor: COLORS.mainColor,
        color: COLORS.white,
        borderWidth: 2,
        borderColor: COLORS.black
    },
    inActive: {
        backgroundColor: COLORS.white,
        color: COLORS.mainColor,
        borderWidth: 2,
        borderColor: COLORS.black
    }
}
const TabMenu: React.FunctionComponent = (): React.ReactElement => {
    const {push} = useHistory()
    const [active, setActive] = useState<string>('/')

    const handlerClick = (data: ITabMenu) => {
        push(data.path)
        setActive(data.path)
    }

    return (
        <>
            <Row justify="space-around">
                {routeTabMenu.map(route => (
                    <Button
                        key={route.name}
                        shape="round"
                        size="large"
                        disabled={route.disable}
                        style={route.path === active ? styles.active : styles.inActive}
                        onClick={() => handlerClick(route)}
                    >
                        {route.name}
                    </Button>
                ))}
            </Row>
        </>
    );
};

export default TabMenu;
