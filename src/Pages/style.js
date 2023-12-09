import { styled } from "styled-components";

export const HomepageTitle = styled.h1`
    font-size: 72px;
    color: #b0413e;
    text-shadow: 2px 2px 5px rgba(0,0,0,0.33);
    letter-spacing: 8px;
    font-weight: 600;
    position: absolute;
    width: 45%;
    top: 25%;
    left: 7.5%;
    text-align: left;
`;

export const HomepageSubtitle = styled.h2`
    font-size: 32px;
    color: #548687;
    text-shadow: 2px 2px 5px rgba(0,0,0,0.33);
    letter-spacing: 8px;
    font-weight: 600;
    position: absolute;
    width: 45%;
    top: 50%;
    left: 7.5%;
    text-align: left;
`;

export const HomepageNewButtonContainer = styled.div`
    position: absolute;
    top: 65%;
    left: 15%;
`;

export const HomepageLine = styled.hr`
    width: 85%;
    color: grey;
    margin-top: 24px;
`

export const HomepageNewButton = styled.button`
    padding: 12px;
    font-size: 32px;
    border: none;
    background: #FFF8D4;
    border-radius: 8px;
    box-shadow: 5px 5px 2px 0px rgba(0,0,0,.3);
    color: #B0413E;
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
    height: 100vh;
    top: 0;
    left: 0;
    transform: scaleX(-1);
`;

export const HomepageOverlay = styled.div`
    position: absolute;
    z-index: 5;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background: linear-gradient(-90deg, rgba(27, 40, 69, 0) 0%, rgba(2, 24, 43, 1) 100%);
`

export const HomepageAboutContainer = styled.div`
    position: absolute;
    top: 100%;
    z-index: 10;
    width: 100vw;
    background: linear-gradient(180deg, rgba(27, 40, 69, 1) 0%,  rgba(2, 24, 43, 1) 100%);
    border-top: 2px solid rgba(2, 24, 43, 1);
`;  

export const HomepageAboutTitle = styled.h1`
    color: #B0413E;
    text-align: center;
    font-size: 32px;
    letter-spacing: 2px;
    width: 70%;
    margin: auto;
    margin-top: 24px;
    font-weight: lighter;
    font-style: italic;
    line-height: 52px;
    text-shadow: 2px 2px 8px rgba(0,0,0,.5);
`;

export const HomepageAboutSubTitle = styled.h2`
    color: rgba(180,180,180,1);
    text-align: center;
    font-size: 28px;
    letter-spacing: 2px;
    width: 60%;
    margin: auto;
    margin-top: 28px;
    font-weight: lighter;
    line-height: 52px;
`;

export const HomepageLink = styled.a`
    color: #B0413E;
`;

export const HomepageAboutText = styled.p`
    margin-left: 7.5%;
    color: white;
    text-align: left;
    font-size: 22px;
    width: 65%;
    letter-spacing: 2px;
    margin: auto;
    font-weight: 400;
    margin-top: 48px;
    line-height: 42px;
    padding: 24px;
`;

export const HarnessTitle = styled.h1`
    font-size: 72px;
    color: #b0413e;
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
    height: 275vh;
    top: 0;
    left: 0;
`;

export const HarnessPageWrapper = styled.div`
    background-color: #FFF8D4;
    position: absolute;
    z-index: 10;
    width: 75%;
    padding: 24px;
    left: 10%;
    border: 1.5px solid #11270b;
    margin-top: 88px;
    box-shadow: 35px 35px 32px 15px rgba(0,0,0,.6);
`;

export const HarnessPageInnerWrapper = styled.div`
    width: 85%;
    margin:auto;
`;

export const HarnessProjectNameContainer = styled.div`
    padding: 6px;
    border: 1.5px solid #11270b;
    text-align: left;
`;

export const HarnessProjectNameLabel = styled.label`
    display: inline-block;
    margin-right: 16px;
    color: #446B6C;
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
    border: 1.5px solid #11270b;
    color: #b0413e;
    font-size: 32px;
    width: 30%;
    margin: auto;
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
    border: 1.5px solid #11270b;
    color: #446B6C;
    font-size: 22px;
    width: 100%;
    padding: 4px;
    margin-bottom: 1px;
`;

export const ContextTextField = styled.textarea`
    border: 1.5px solid #11270b;
    background: none;
    color: black;
    font-size: 24px;
    text-align: center;
    width: 100%;
    height: 300px;
    padding: 4px;
    resize: none;   
`;

export const ContextFooter = styled.h3`
    margin-top: 1px;
    padding: 4px;
    width: 100%;
    border: 1.5px solid #11270b;
    color: #446B6C;
    font-size: 22px;
`

export const InstructionContainer = styled.div`
    width: 100%;
`

export const InstructionTextField = styled.textarea`
    border: 1.5px solid #11270b;
    background: none;
    color: black;
    font-size: 14px;
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
    border: 1.5px solid #11270b;
    background: none;
    color: black;
    font-size: 14px;
    width: 100%;
    height: 100px;
    padding: 4px;
    resize: none;

`;

export const RewardsRow = styled.div`
    margin: auto;
    margin-top: 56px;
`

export const RewardsContainer = styled.div`
    display: inline-block;
    padding: 6px;
    width: 30%;
    border: 1.5px solid #11270b;

`

export const RewardsTitle = styled.h4`
    margin: auto;
    color: #b0413e;
    padding: 4px;
`;

export const RewardsTextField = styled.textarea`
    margin: 2px 2px 2px 2px;
    border: none;
    background: none;
    color: black;
    width: 95%;
    font-size: 14px;
    height: 80px;
    padding: 4px;
    resize: none;
`;

export const SaveButton = styled.button`
    border-radius: 18px;
    width: 35%;
    border: none;
    background: linear-gradient(#446B6C 0%, #1b2845 100%);
    color: white;
    font-size: 32px;
    padding: 6px;
    margin-top: 14px;
    letter-spacing: 8px; 
    cursor: pointer;
    transition: transform .3s;
    &:hover {
        transform: scale(1.05);
        transition: transform .4s;
        box-shadow: 2px 2px 8px 0px rgba(0,0,0,.4);
    }
`