import { styled } from "styled-components";

export const colorPrimary = 'rgba(254, 250, 224, 1)';
export const colorSecondary = 'rgba(221, 161, 94, 1)';
export const colorTertiary = 'rgba(100, 131, 129, 1)';
export const colorSecondaryDeep = 'rgba(188, 108, 37, 1)';
export const colorMisc = 'rgba(35, 57, 91, 1)';
export const colorBlack = '#0e1111';
export const colorWhite = '#f9f9f9';

export const HomepageTitle = styled.h1`
    font-size: 102px;
    color: ${colorPrimary};
    text-shadow: 2px 2px 5px rgba(0,0,0,0.33);
    letter-spacing: 8px;
    font-weight: 600;
    position: absolute;
    width: 100%;
    text-align: center;
`;

export const HomepageSubtitle = styled.h2`
    font-size: 48px;
    color: ${colorSecondary};
    text-shadow: 2px 2px 5px rgba(0,0,0,0.33);
    letter-spacing: 8px;
    font-weight: 600;
    position: absolute;
    width: 100%;
    top: 15%;
    text-align: center;
`;

export const HomepageNewButtonContainer = styled.div`
    position: absolute;
    top: 45%;
    width: 100%;
`;

export const HomepageLine = styled.hr`
    width: 85%;
    color: grey;
    margin-top: 24px;
`

export const HomepageNewButton = styled.button`
    padding: 12px;
    font-size: 78px;
    border: none;
    background: none;
    border-radius: 8px;
    text-shadow: 4px 4px 8px rgba(0,0,0,0.5);
    color: ${colorSecondaryDeep};
    cursor: pointer;
    transition: transform .3s;
    &:hover {
        transform: scale(1.05);
        transition: transform .4s;
    }
`;

export const HomepageBackground = styled.img`
    position: absolute;
    z-index: 0;
    width: 100vw;
    height: 125vh;
    top: 9%;
    left: 0;
    transform: scaleX(-1);
`;

export const HomepageButtonSubtitle = styled.button`
    font-size: 22px;
    color: ${colorSecondary};
    text-shadow: 2px 2px 5px rgba(0,0,0,0.33);
    letter-spacing: 8px;
    font-weight: 600;
    width: 100%;
    text-align: center;
    background: none;
    border: none;
    margin-top: 24px;
    cursor: pointer;
    transition: transform .3s;
    &:hover {
        transform: scale(1.05);
        transition: transform .4s;
    }
`;

export const HomepageOverlay = styled.div`
    position: absolute;
    z-index: 5;
    width: 100vw;
    height: 125vh;
    top: 9%;
    left: 0;
    background: linear-gradient(0deg, ${colorBlack} 20%, rgba(22, 105, 122, .1) 100%);
`;

export const AboutQuote = styled.h1`
    position: absolute;
    top: 20%;
    color: ${colorPrimary};
    z-index: 15;
    font-size: 48px;
    width: 75%;
    left: 12.5%;
    font-style: italic;
    letter-spacing: 2px;
    line-height: 68px;
`;

export const AboutAttribution = styled.h2`
    position: absolute;
    top: 49%;
    color: ${colorSecondary};
    z-index: 15;
    width: 100%;
    letter-spacing: 8px;
    font-size: 28px;

`;

export const AboutText = styled.p`
    position: absolute;
    top: 105%;
    color: ${colorPrimary};
    z-index: 15;
    font-size: 22px;
    width: 85%;
    left: 7.5%;
    letter-spacing: 2px;
    line-height: 48px;
    padding-bottom: 168px;
    padding-top: 24px;
`;

export const AboutLink = styled.a`
    text-decoration: none;
    color: ${colorTertiary};
`;

export const AboutButton = styled.button`
    position: absolute;
    top: 140%;
    z-index: 15;
    border-radius: 18px;
    left: 37.5%;
    width: 25%;
    border: none;
    background: linear-gradient(${colorTertiary} 0%, rgba(80, 111, 119, 1) 100%);
    color: ${colorWhite};
    font-size: 32px;
    padding: 16px;
    letter-spacing: 8px; 
    cursor: pointer;
    transition: transform .3s;
    &:hover {
        transform: scale(1.05);
        transition: transform .4s;
        box-shadow: 2px 2px 8px 0px rgba(0,0,0,.4);
    }
`;

export const HarnessTitle = styled.h1`
    font-size: 72px;
    color: ${colorSecondaryDeep};
    text-shadow: 2px 2px 5px rgba(0,0,0,0.33);
    letter-spacing: 8px;
    font-weight: 600;
    width: 100%;
    margin-top: 24px;
    margin-bottom: 24px;
`;

export const HarnessPageBackground = styled.img`
    position: absolute;
    z-index: 0;
    width: 100vw;
    height: 250vh;
    top: 0;
    left: 0;
`;

export const HarnessOverlay = styled.div`
    position: absolute;
    z-index: 5;
    width: 100vw;
    height: 250vh;
    left: 0;
    background: linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(22, 105, 122, 0) 100%);
`;

export const HarnessPageWrapper = styled.div`
    background: ${colorPrimary};
    border-radius: 24px;
    position: absolute;
    z-index: 10;
    width: 75%;
    padding: 24px;
    top: 5%;
    left: 10%;
    margin-top: 88px;
    box-shadow: 35px 35px 32px 15px rgba(0,0,0,.6);
`;

export const HarnessPageInnerWrapper = styled.div`
    width: 85%;
    margin:auto;
`;

export const HarnessProjectNameContainer = styled.div`
    padding: 6px;
    border: 1.5px solid ${colorMisc};
    text-align: left;
`;

export const HarnessLine = styled.hr`
    width: 90%;
    color: ${colorBlack};
`;

export const HarnessProjectNameLabel = styled.label`
    display: inline-block;
    margin-right: 16px;
    color: ${colorTertiary};
    letter-spacing: 2px;
    font-weight: 600;
`;

export const HarnessProjectName = styled.input`
    display: inline-block;
    background: none;
    border: none;
    width: 80%;
    margin: auto;
    padding: 4px;
    font-size: 18px;
`;

export const HarnessContextTitle = styled.h2`
    color: ${colorSecondary};
    font-size: 32px;
    width: 30%;
    margin: auto;
    margin-top: 24px;
    padding: 6px;
`;

export const ContextRow = styled.div`
`;

export const ContextContainer = styled.div`
    width: 45%;
    margin-right: 16px;
    display: inline-block;
`;

export const ContextTitle = styled.h3`
    border: 1.5px solid ${colorMisc};
    color: ${colorTertiary};
    font-size: 22px;
    width: 100%;
    padding: 4px;
    margin-bottom: 1px;
`;

export const ContextTextField = styled.textarea`
    border: 1.5px solid ${colorMisc};
    background: none;
    color: black;
    font-size: 24px;
    text-align: center;
    width: 100%;
    height: 200px;
    padding: 4px;
    resize: none;   
`;

export const ContextFooter = styled.h3`
    margin-top: 1px;
    padding: 4px;
    width: 100%;
    border: 1.5px solid ${colorMisc};
    color: ${colorTertiary};
    font-size: 22px;
`

export const InstructionContainer = styled.div`
    margin: auto;
`

export const InstructionTextField = styled.textarea`
    border: 1.5px solid ${colorMisc};
    background: none;
    color: black;
    font-size: 24px;
    text-align: center;
    width: 100%;
    height: 200px;
    padding: 4px;
    resize: none; 
`;

export const ConstraintContainer = styled.div`
    width: 30%;
    margin-right: 16px;
    display: inline-block;
`;

export const ConstraintTextField = styled.textarea`
    border: 1.5px solid ${colorMisc};
    background: none;
    color: black;
    font-size: 20px;
    width: 100%;
    height: 100px;
    padding: 4px;
    resize: none;
    text-align: center;
`;

export const RewardsRow = styled.div`
    margin: auto;
    margin-top: 36px;
`

export const RewardsContainer = styled.div`
    display: inline-block;
    padding: 6px;
    width: 30%;
    border: 1.5px solid ${colorMisc};

`

export const RewardsTitle = styled.h4`
    margin: auto;
    color: ${colorSecondary};
    padding: 4px;
`;

export const RewardsTextField = styled.textarea`
    margin: 2px 2px 2px 2px;
    border: none;
    background: none;
    color: black;
    width: 95%;
    font-size: 20px;
    height: 80px;
    padding: 4px;
    resize: none;
    text-align:center;
`;

export const SaveButton = styled.button`
    border-radius: 18px;
    width: 35%;
    border: none;
    background: linear-gradient(${colorTertiary} 0%, rgba(80, 111, 119, 1) 100%);
    color: ${colorWhite};
    font-size: 32px;
    padding: 6px;
    margin-top: 14px;
    margin-left: 8px;
    margin-right: 8px;
    letter-spacing: 8px; 
    cursor: pointer;
    transition: transform .3s;
    &:hover {
        transform: scale(1.05);
        transition: transform .4s;
        box-shadow: 2px 2px 8px 0px rgba(0,0,0,.4);
    }
`

export const ProjectsOverlay = styled.div`
    position: absolute;
    z-index: 5;
    width: 100vw;
    height: 125vh;
    top: 9%;
    left: 0;
    background: linear-gradient(0deg, ${colorBlack} 0%, rgba(0, 0, 0, 0.4) 100%);
`

export const ProjectsListContainer = styled.div`
    position: absolute;
    z-index: 10;
    top: 32.5%;
    width: 90%;
    left: 5%;
`;

export const ProjectsListTitle = styled.h1`
    font-size: 102px;
    color: ${colorSecondaryDeep};
    text-shadow: 2px 2px 5px rgba(0,0,0,0.33);
    letter-spacing: 18px;
    font-weight: 600;
    position: absolute;
    top: 2.5%;
    width: 100%;
    text-align: center;
    z-index: 10;
`;

export const ProjectsTitleLine = styled.hr`
    width: 85%;
    background: ${colorPrimary};
    z-index: 10;
    position: absolute;
    top: 25%;
    left: 7.5%;
    height: 2px;
    border: none;
`;


export const ProjectsListItem = styled.button`
    border: none;
    border-radius: 16px;
    background: rgba(0,0,0,0.2);
    border-bottom: 2px solid ${colorBlack};
    padding: 16px;
    width: 100%;
    font-size: 48px;
    color: ${colorSecondary};
    margin-bottom: 44px;
    text-shadow: 2px 2px 8px rgba(0,0,0,.4);
    letter-spacing: 2px;
    text-align: center;
    cursor: pointer;
    transition: transform .3s;
    &:hover {
        transform: scale(1.05);
        transition: transform .4s;
    }
`;

export const ProjectsListCreateItem = styled.button`
    border: 3px dashed ${colorTertiary};
    border-radius: 16px;
    background: rgba(0,0,0,0.2);
    padding: 16px;
    font-size: 48px;
    color: ${colorPrimary};
    margin-bottom: 44px;
    cursor: pointer;
    transition: transform .3s;
    width: 50%;
    &:hover {
        transform: scale(1.05);
        transition: transform .4s;
    }
`;