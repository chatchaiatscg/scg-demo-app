import {styled} from '@mui/material/styles';

export const Title = styled('span')(({theme}) => ({
    fontWeight: 700,
    [theme.breakpoints.only('xl')]: {
        fontSize: '56px'
    },
    [theme.breakpoints.only('lg')]: {
        fontSize: '56px'
    },
    [theme.breakpoints.only('md')]: {
        fontSize: '56px'
    },
}));