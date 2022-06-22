import Card from '@mui/material/Card';
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
    padding-top: 13%;
};
${theme.breakpoints.only('xl')}{
    padding-left: 15%;
    padding-top: 16px;
};
${theme.breakpoints.only('lg')}{
    padding-left: 42px;
    padding-top: 78px;
};
${theme.breakpoints.only('tablet')}{
    left: 32px;
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
    margin-top: 11.63vw;
    margin-left: 37.7%;
    .fan2 {
        margin-top: 9.3vw;
        margin-left: 0.8vw;
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
    width: 21px;
    height: 21px;
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
min-width: 2.1rem;
text-align: center;

${theme.breakpoints.only('monitor43')}{
    font-size: 62px;
    margin-top: -26.8vw;
    right: 5.7vw;
    .subText {
        line-height: 2;
        font-size: 52px;
    }
};
${theme.breakpoints.only('desktop')}{
    font-size: 32px;
    margin-top: -26.8vw;
    right: 5.7vw;
    .subText {
        font-size: 24px;
    }
};
${theme.breakpoints.only('xl')}{
    font-size: 1.75vw;
    margin-top: -26.8vw;
    right: 5.7vw;
};
${theme.breakpoints.only('lg')}{
    font-size: 22px;
    margin-top: -26.3vw;
    right: 5.5vw;
    .subText {
        line-height:1.8;
        font-size: 20px;
    }
};
${theme.breakpoints.only('tablet')}{
    font-size: 20px;
    margin-top: -29.6vw;
    right: 3.5vw;
    .subText {
        font-size: 18px;
    }
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
    line-height: 1.7;
    left: 19vw;
    bottom: 0;
    margin-bottom: 17.3vw;
    font-size: 1.2vw;
};
${theme.breakpoints.only('desktop')}{
    width: 34px;
    left: 76%;
    bottom: 17.3vw;
    font-size: 24px;
};

${theme.breakpoints.only('xl')}{
    width: 34px;
    left: 44.5%;
    top: 31.5%;
    font-size: 1.4vw;
};
${theme.breakpoints.only('lg')}{
    line-height: 1.8;
    font-size: 16px;
    margin-top: -21.1vw;
    right: 3.65vw;
    .sub {
        margin-top: 0.01vw;
    }
};
${theme.breakpoints.only('tablet')}{
    line-height: 1.8;
    font-size: 1.3vw;
    margin-top: -24.2vw;
    right: 1.3vw;
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
    width: 18px;
    height: 18px;
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

export const RelativeButton = styled('div')(({theme}) => `
height: 70%;
${theme.breakpoints.up('monitor43')}{
 
};
${theme.breakpoints.only('desktop')}{
    height: 58%;
};
${theme.breakpoints.only('xl')}{
};
${theme.breakpoints.only('lg')}{
};
${theme.breakpoints.only('tablet')}{
    height: 63%;
};
@media (width:1024px) {
    height: 65%;
};
`
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

export const WrapCardBtnContainer = styled(Card)(({theme}) => `
border-radius: 20px;

${theme.breakpoints.up('monitor43')}{
    border-radius: 48px;
};
${theme.breakpoints.only('desktop')}{
    border-radius: 28px;
};
${theme.breakpoints.only('xl')}{
};
${theme.breakpoints.only('lg')}{
};
${theme.breakpoints.only('tablet')}{
};
${theme.breakpoints.only('md')}{
};`);

export const WrapBtnContainer = styled('div')(({theme}) => `
font-weight: 700;
padding: 13px;
font-size: 1.6vw;

${theme.breakpoints.up('monitor43')}{
    font-size: 62px;
    padding: 42px;
};
${theme.breakpoints.only('desktop')}{
    font-size: 32px;
    padding: 18px;
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
line-height: 1.3;

 .icon {
    display: grid;
    place-items: center;
    margin-left: 1%;
    margin-right: 1%;
}
${theme.breakpoints.only('monitor43')}{
  
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
    [theme.breakpoints.only('desktop')]: {
        fontSize: '1.5vw'
    },
    [theme.breakpoints.only('xl')]: {
        fontSize: '1.2vw'
    },
    [theme.breakpoints.only('lg')]: {
        fontSize: '1.2vw'
    },
    [theme.breakpoints.only('tablet')]: {
        fontSize: '22px'
    },
    [theme.breakpoints.only('md')]: {
        fontSize: '1.45vw'
    },
}));

// Paragraph.tsx
export const MarginSubParagraph = styled('div')(({theme}) => `
margin-top: 8px;
${theme.breakpoints.up('monitor43')}{

};
${theme.breakpoints.only('desktop')}{

};
${theme.breakpoints.only('xl')}{

};
${theme.breakpoints.only('lg')}{
  
};
${theme.breakpoints.only('tablet')}{

};
@media (width:1024px) {

};
${theme.breakpoints.only('md')}{
};`);

export const MarginParagraph1 = styled('div')(({theme}) => `
margin-top: 48px;
${theme.breakpoints.up('monitor43')}{
margin-top: 86px;
};
${theme.breakpoints.only('desktop')}{
};
${theme.breakpoints.only('xl')}{
};
${theme.breakpoints.only('lg')}{
};
${theme.breakpoints.only('tablet')}{
};
@media (width:1024px) {
};
${theme.breakpoints.only('md')}{
};`);

export const ContainerHeadParagraph = styled('div')(({theme}) => `
font-size: 3vw;
margin-top: 40px;

.sub-title {
    font-size: 2.5vw;
}

${theme.breakpoints.up('monitor43')}{
margin-top: 52px;

};
${theme.breakpoints.only('desktop')}{
};
${theme.breakpoints.only('xl')}{
};
${theme.breakpoints.only('lg')}{
    margin-top: 40px;
};
${theme.breakpoints.only('tablet')}{
    margin-top: 40px;
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
        marginTop: '40px',
        marginLeft: '3.5vw',
    },
    [theme.breakpoints.only('tablet')]: {
        marginTop: '40px',
        marginLeft: '4.5vw',
    },
    [theme.breakpoints.only('md')]: {
        marginTop: '5vh',
        marginLeft: '3vw',
    },
}));

export const MiddleParagraph = styled('div')(({theme}) => ({
    minHeight: '270px',
    width: '95%',
    [theme.breakpoints.only('monitor43')]: {
        minHeight: '760px',
    },
    [theme.breakpoints.only('desktop')]: {
        minHeight: '360px',
    },
    [theme.breakpoints.only('xl')]: {
    },
    [theme.breakpoints.only('xl')]: {
    },
    [theme.breakpoints.only('lg')]: {
    },
    [theme.breakpoints.only('tablet')]: {
        minHeight: '210px',
    },
    [theme.breakpoints.only('md')]: {
    },
}));

export const ULParagraph = styled('div')(({theme}) => ({
    marginLeft: '24px',
    [theme.breakpoints.only('monitor43')]: {
        marginLeft: '72px',
    },
    [theme.breakpoints.only('desktop')]: {
    },
    [theme.breakpoints.only('xl')]: {
    },
    [theme.breakpoints.only('lg')]: {
    },
    [theme.breakpoints.only('tablet')]: {
    },
    [theme.breakpoints.only('md')]: {
    },
}));

export const WidthULParagraph = styled('div')(({theme}) => ({
    minWidth: '300px',
    [theme.breakpoints.only('monitor43')]: {
        minWidth: '830px',
    },
    [theme.breakpoints.only('desktop')]: {
    },
    [theme.breakpoints.only('xl')]: {
    },
    [theme.breakpoints.only('lg')]: {
        minWidth: '230px',
    },
    [theme.breakpoints.only('tablet')]: {
        minWidth: '155px',
    },
    [theme.breakpoints.only('md')]: {
    },
}));