import {useTheme} from '@mui/material/styles';

export const useMatchCurrentWidth = () => {
    const currentWidth = window.screen.width
    const theme = useTheme();

    const matchWidth = () => {
        let result = {}
        for (const [k, v] of Object.entries(theme.breakpoints.values)) {
            if (currentWidth >= v) {
                return {[k]: v}
            }
        }
        return result
    }

    return {
        matchWidth
    }
}