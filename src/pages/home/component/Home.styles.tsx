import {styled} from '@mui/material/styles';

import {IconBack} from 'assets/icon/svg';
import {COLORS} from 'core/utils/constant';

export const SpaceTopMobile = styled('div')(({theme}) => `
${theme.breakpoints.up('xl')}{
    margin-top: 20%;
};
${theme.breakpoints.only('xl')}{
    margin-top: 20%;
};
${theme.breakpoints.only('lg')}{
    margin-top: 10%;
};
@media (width:1024px) {
    margin-top: 0%;
};
${theme.breakpoints.only('tablet')}{

};
${theme.breakpoints.only('md')}{

};`);


// Mobile.tsx
export const WrapMobileIcon = styled('div')(({theme}) => `
position: relative;
${theme.breakpoints.only('monitor43')}{
    padding-left: 10%;
    padding-top: 7%;
};
${theme.breakpoints.only('desktop')}{
    padding-left: 10%;
    padding-top: 5%;
};
${theme.breakpoints.only('xl')}{
    padding-left: 15%;
    padding-top: 16px;
};
${theme.breakpoints.only('lg')}{
    left: 20px;
    padding-top: 15%;
};
${theme.breakpoints.only('tablet')}{
    left: 20px;
};
${theme.breakpoints.only('md')}{
    padding-left: 12px;
    padding-top: 12px;
};`);

export const WrapFanIcon = styled('div')(({theme}) => `
position: absolute;

${theme.breakpoints.only('monitor43')}{
    margin-top: 11.86vw;
    margin-left: 8.45vw;
    .fan2 {
        margin-top: 9.47vw;
        margin-left: 0.83vw;
    }
};

${theme.breakpoints.only('desktop')}{
    margin-top: 11.89vw;
    margin-left: 8.46vw;
    .fan2 {
        margin-top: 9.47vw;
        margin-left: 0.8vw;
    }
};

${theme.breakpoints.only('xl')}{
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
        margin-left: 0.9vw;
    }
};
${theme.breakpoints.only('tablet')}{
    margin-top: 52.8%;
    margin-left: 37.8%;
    .fan2 {
        margin-top: 10.55vw;
        margin-left: 0.9vw;
    }
};
${theme.breakpoints.only('md')}{
    margin-top: 18.5vw;
};`);

export const FanIcon = styled('img')(({theme}) => `
${theme.breakpoints.only('monitor43')}{
    width: 56px;
    height: 56px;
};
${theme.breakpoints.only('desktop')}{
    width: 29px;
    height: 29px;
};
${theme.breakpoints.only('xl')}{
    width: 22px;
    height: 22px;
};
${theme.breakpoints.only('lg')}{
    width: 1.65vw;
    height: 1.65vw;
};
${theme.breakpoints.only('tablet')}{
    width: 1.65vw;
    height: 1.65vw;
};
${theme.breakpoints.only('md')}{
    width: 12px;
    height: 12px;
};`);

export const StatusBoard = styled('div')(({theme}) => `
position: absolute;
background-color: white;
font-weight: 700;
.subText {
    font-size: 1.5vw;
}

${theme.breakpoints.only('monitor43')}{
    font-size: 1.75vw;
    margin-top: -26.8vw;
    right: 5.7vw;
    .subText {
        font-size: 1.4vw;
    }
};

${theme.breakpoints.up('xl')}{
    font-size: 1.75vw;
    margin-top: -26.8vw;
    right: 5.7vw;
    .subText {
        font-size: 1.4vw;
    }
};

${theme.breakpoints.only('lg')}{
    font-size: 2vw;
    margin-top: -29.8vw;
    right: 4.9vw;
};
${theme.breakpoints.only('tablet')}{
    font-size: 20px;
    margin-top: -29.8vw;
    right: 4.33vw;
};
@media (width:1024px) {
    font-size: 20px;
    margin-top: -30.1vw;
    right: 4.4vw;
};
${theme.breakpoints.only('md')}{
   
};`);

export const StatusBoard2 = styled('div')(({theme}) => `
position: absolute;
background-color: white;
font-weight: 400;

width: 31px;
line-height: 1.75;

${theme.breakpoints.only('monitor43')}{
    width: 45px;
    line-height: 1.5;
    left: 19vw;
    bottom: 0;
    margin-bottom: 17.3vw;

    font-size: 1.4vw;
};

${theme.breakpoints.up('xl')}{
    width: 45px;
    line-height: 1.5;
    left: 19vw;
    bottom: 0;
    margin-bottom: 17.3vw;

    font-size: 1.4vw;
};

${theme.breakpoints.only('xl')}{
    width: 34px;
    left: 44.5%;
    top: 31.5%;
    font-size: 1.4vw;
};
${theme.breakpoints.only('xl')}{
    width: 34px;
    left: 44.5%;
    top: 31.5%;
    font-size: 1.4vw;
};
${theme.breakpoints.only('lg')}{
    line-height: 1.8;
    font-size: 1.3vw;
    margin-top: -24.1vw;
    right: 3vw;
    .sub {
        margin-top: 0.01vw;
    }
};
${theme.breakpoints.only('tablet')}{
    line-height: 1.8;
    font-size: 1.3vw;
    margin-top: -24.3vw;
    right: 1.8vw;
    .sub {
        margin-top: 0.01vw;
    }
};
@media (width:1024px) {
    line-height: 1.8;
    font-size: 1.3vw;
    margin-top: -24.1vw;
    right: 1.5vw;
    .sub {
        margin-top: 0.01vw;
    }
};
${theme.breakpoints.only('md')}{
};`);

// ControllerButton.tsx
export const IconBackContainer = styled(IconBack)(({theme}) => `
margin-top: 2px;
${theme.breakpoints.up('monitor43')}{
    width: 30px;
    height: 30px;
    margin-top: 12px;
    margin-right: 12px;
};
${theme.breakpoints.only('desktop')}{
    width: 20px;
    height: 20px;
    margin-top: 6px;
};
${theme.breakpoints.only('xl')}{
    width: 16px;
    height: 16px;
};
${theme.breakpoints.only('lg')}{
    width: 12px;
    height: 12px;
};
${theme.breakpoints.only('tablet')}{
    width: 10px;
    height: 10px;
    margin-top: 4px;
};
${theme.breakpoints.only('md')}{
    width: 12px;
    height: 12px;
};
`,
);

export const WrapIcon = styled('img')(({theme}) => `
${theme.breakpoints.up('monitor43')}{
    width: 90px;
    height: 72px;
};
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

${theme.breakpoints.up('monitor43')}{
    font-size: 1.8vw;
    padding: 20px;
};
${theme.breakpoints.only('desktop')}{
    font-size: 1.8vw;
    padding: 10px;
};
${theme.breakpoints.only('xl')}{
    max-height: 112px;
    padding-left: 27px;
    padding-right: 8px;
};
${theme.breakpoints.only('lg')}{
font-size: 1.6vw;

};
${theme.breakpoints.only('tablet')}{
    max-height: 112px;
    padding-left: 10px;
    padding-right: 6px;
};
${theme.breakpoints.only('md')}{
max-height: 112px;

};`);

export const TempBtnContainer = styled('div')(({theme}) => `
display: flex;

 .icon {
    display: grid;
    place-items: center;
}
${theme.breakpoints.up('monitor43')}{

};

${theme.breakpoints.only('xl')}{

};
${theme.breakpoints.only('lg')}{
  
};
${theme.breakpoints.only('md')}{
  
};`);

export const TitleBackHome = styled('span')(({theme}) => ({
    fontWeight: 400,
    color: COLORS.black,
    [theme.breakpoints.up('monitor43')]: {
        fontSize: '2vw'
    },
    [theme.breakpoints.only('desktop')]:{
        fontSize: '2vw'
    },
    [theme.breakpoints.only('xl')]: {
        fontSize: '1.45vw'
    },
    [theme.breakpoints.only('lg')]: {
        fontSize: '1.6vw'
    },
    [theme.breakpoints.only('tablet')]: {
        fontSize: '22px'
    },
    [theme.breakpoints.only('md')]: {
        fontSize: '1.45vw'
    },
}));

// Paragraph.tsx
export const ContainerHeadParagraph = styled('div')(({theme}) => `
font-size: 3vw;
${theme.breakpoints.up('monitor43')}{
    margin-top: 4%;
};
${theme.breakpoints.only('desktop')}{
    margin-top: 3%;
};
${theme.breakpoints.only('xl')}{
    margin-top: 3%;
};
${theme.breakpoints.only('lg')}{
    margin-top: 3%;
};
${theme.breakpoints.only('tablet')}{
    margin-top: 10%;
};
@media (width:1024px) {
    margin-top: 10%;
};
${theme.breakpoints.only('md')}{
};`);

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