import {styled} from '@mui/material/styles';

import {IconBack} from 'assets/icon/svg';

// Mobile.tsx
export const WrapMobileIcon = styled('div')(({theme}) => `
position: relative;
${theme.breakpoints.up('xl')}{
    padding-left: 10%;
    padding-top: 15%;
};
${theme.breakpoints.only('xl')}{
    padding-left: 15%;
    padding-top: 16px;
};
${theme.breakpoints.only('lg')}{
    left: 20px;
    padding-top: 16px;
};
${theme.breakpoints.only('tablet')}{
    left: 20px;
    padding-top: 32px;
};
${theme.breakpoints.only('md')}{
    padding-left: 12px;
    padding-top: 12px;
};`);

export const WrapFanIcon = styled('div')(({theme}) => `
position: absolute;

${theme.breakpoints.up('xl')}{
    margin-top: 11.86vw;
    margin-left: 8.45vw;
    .fan2 {
        margin-top: 9.45vw;
        margin-left: 0.83vw;
    }
};
${theme.breakpoints.only('xl')}{
    margin-top: 11.2vw;
    margin-left: 8vw;

    .fan2 {
        margin-top: 8.95vw;
        margin-left: 0.79vw;
    }
};
${theme.breakpoints.only('lg')}{
    margin-top: 13.15vw;
    margin-left: 37.8%;
    .fan2 {
        margin-top: 10.55vw;
        margin-left: 0.94vw;
    }
};
${theme.breakpoints.only('tablet')}{
    margin-top: 13.15vw;
    margin-left: 37.8%;
    .fan2 {
        margin-top: 10.6vw;
        margin-left: 0.9vw;
    }
};
${theme.breakpoints.only('md')}{
    margin-top: 18.5vw;
};`);

export const FanIcon = styled('img')(({theme}) => `
${theme.breakpoints.up('xl')}{
    width: 29px;
    height: 29px;
};
${theme.breakpoints.only('xl')}{
    width: 22px;
    height: 22px;
};
${theme.breakpoints.only('lg')}{
    width: 21px;
    height: 21px;
};
${theme.breakpoints.only('tablet')}{
    width: 19px;
    height: 19px;
};
${theme.breakpoints.only('md')}{
    width: 12px;
    height: 12px;
};`);

// ControllerButton.tsx
export const IconBackContainer = styled(IconBack)(({theme}) => `
${theme.breakpoints.up('xl')}{
    width: 16px;
    height: 16px;
},
${theme.breakpoints.only('xl')}{
    width: 16px;
    height: 16px;
};
${theme.breakpoints.only('lg')}{
    width: 16px;
    height: 16px;
};
${theme.breakpoints.only('tablet')}{
    width: 12px;
    height: 12px;
};
${theme.breakpoints.only('md')}{
    width: 12px;
    height: 12px;
};
`,
);

export const WrapIcon = styled('img')(({theme}) => `
${theme.breakpoints.only('xl')}{
   width: 45px;
   height: 38px;
};
${theme.breakpoints.only('lg')}{
    width: 35px;
    height: 30px;
};
${theme.breakpoints.only('tablet')}{
    width: 30px;
    height: auto;
 };
${theme.breakpoints.only('md')}{
    width: 35px;
    height: auto;
};
${theme.breakpoints.only('sm')}{
    width: 30px;
    height: auto;
};
`);

export const WrapBtnContainer = styled('div')(({theme}) => `
font-weight: 700;
padding: 13px;
font-size: 1.6vw;

max-height: 112px;
${theme.breakpoints.only('xl')}{
    padding-left: 27px;
    padding-right: 8px;
};
${theme.breakpoints.only('lg')}{
};
${theme.breakpoints.only('md')}{
};`);

export const TempBtnContainer = styled('div')(({theme}) => `
display: flex;

 .icon {
    display: grid;
    place-items: center;
}
${theme.breakpoints.only('xl')}{

};
${theme.breakpoints.only('lg')}{
  
};
${theme.breakpoints.only('md')}{
  
};`);

export const TitleBackHome = styled('span')(({theme}) => ({
    fontWeight: 400,
    [theme.breakpoints.up('xl')]: {
        fontSize: '1.7vw'
    },
    [theme.breakpoints.only('xl')]: {
        fontSize: '1.45vw'
    },
    [theme.breakpoints.only('lg')]: {
        fontSize: '1.45vw'
    },
    [theme.breakpoints.only('tablet')]: {
        fontSize: '22px'
    },
    [theme.breakpoints.only('md')]: {
        fontSize: '1.45vw'
    },
}));

// Paragraph.tsx
export const ContainerHeadParagraph = styled('div')(({theme}) => ({
    fontSize: '3vw',
    [theme.breakpoints.up('xl')]: {
        marginTop: '3vh',
        marginLeft: '-2%',
    },
    [theme.breakpoints.only('xl')]: {
        marginTop: '3vh',
        marginLeft: '-2%',
    },
    [theme.breakpoints.only('lg')]: {
        marginTop: '3vh',
        marginLeft: '-2%',
    },
    [theme.breakpoints.only('tablet')]: {
        marginTop: '7vh',
        marginLeft: '-2%',
    },
    [theme.breakpoints.only('md')]: {
        marginTop: '3vh',
        marginLeft: '-2%',
    },
}));

export const ContainerSubParagraph = styled('div')(({theme}) => ({
    flexWrap: 'wrap',
    [theme.breakpoints.up('xl')]: {
        marginTop: '5vh',
        marginLeft: '3vw',
    },
    [theme.breakpoints.only('xl')]: {
        marginTop: '5vh',
        marginLeft: '3vw',
    },
    [theme.breakpoints.only('lg')]: {
        marginTop: '5vh',
        marginLeft: '3.5vw',
    },
    [theme.breakpoints.only('tablet')]: {
        marginTop: '5vh',
        marginLeft: '4.5vw',
    },
    [theme.breakpoints.only('md')]: {
        marginTop: '5vh',
        marginLeft: '3vw',
    },
}));