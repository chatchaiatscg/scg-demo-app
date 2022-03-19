import './App.css'
import React from "react";
import {createTheme, ThemeProvider} from '@mui/material/styles';

import AppContainer from "./core/app/AppContainer";

declare module '@mui/material/styles' {
    interface BreakpointOverrides {
        xs: true;
        sm: true;
        md: true;
        lg: true;
        xl: true;
        tablet: true;
        desktop: true;
    }
}

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            // @ts-ignore
            tablet: 1024,
            lg: 1200,
            xl: 1536,
            desktop: 1920,
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
