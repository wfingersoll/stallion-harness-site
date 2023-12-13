import { styled } from "styled-components";
import { colorBlack, colorMisc, colorPrimary, colorSecondary, colorTertiary, colorWhite } from "../Pages/style";

export const NavContainer = styled.div`
    position: fixed;
    top: 0%;
    width: 100%;
    background: linear-gradient(${colorTertiary} 0%, rgba(80, 111, 119, 1) 100%);
    box-shadow: 0px 2px 16px ${colorBlack};
    z-index: 100;
`;

export const NavButton = styled.button`
    border: none;
    background: none;
    color: ${colorPrimary};
    font-size: 32px;
    padding-bottom: 24px;
    padding-top: 20px;
    display: inline-block;
    margin-right: 24px;
    margin-left: 24px;
    cursor: pointer;
    transition: transform .3s;
    &:hover {
        transform: scale(1.15);
        transition: transform .4s;
    }
`;