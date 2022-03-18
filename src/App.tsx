import './App.css'
import React from "react";
import {createTheme, ThemeProvider} from '@mui/material/styles';

import AppContainer from "./core/app/AppContainer";

// declare module '@mui/material/styles' {
//     interface BreakpointOverrides {
//         xs: true;
//         sm: true;
//         md: true;
//         lg: true;
//         xl: true;
//         mobile: false;
//         tablet: true;
//         laptop: true;
//         desktop: true;
//     }
// }

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 900,
            md: 1180,
            // @ts-ignore
            tablet: 1024,
            lg: 1200,
            xl: 1536,
        },
    },
});

const App: React.FunctionComponent = (): React.ReactElement => (
    // <AppContainer />
    <ThemeProvider theme={theme}>
        <AppContainer />
    </ThemeProvider>
)

export default App;
