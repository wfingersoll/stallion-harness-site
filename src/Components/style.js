import { styled } from "styled-components";

export const SidebarContainer = styled.div`
    width: ${props => props.width};
    position: absolute;
    z-index: 20;
    left: 0;
    top: 0;
    height: 100%;
    background: linear-gradient(rgba(84, 134, 135, .8) 0%, rgba(27, 40, 69, 1) 70%);
    overflow: hidden;
    transition: width .4s;
`;

export const SidebarHamburger = styled.img`
    z-index: 10;
    filter: invert(90);
    width: 3%;
    position: absolute;
    left: 1%;
    top: 1%;
    cursor: pointer;
    transition: transform .3s;
    &:hover {
        transform: scale(1.15);
        transition: transform .4s;
    }
`;

export const SidebarClose = styled.img`
    width: 7.5%;
    filter: invert(90);
    position: absolute;
    right: 1%;
    top: 1%;
    cursor: pointer;
    transition: transform .3s;
    &:hover {
        transform: scale(1.15);
        transition: transform .4s;
    }
`;

export const SidebarLink = styled.button`
    background: #FFF8D4;
    border: none;
    color: #b0413e;
    cursor: pointer;
    width: 90%;
    text-align: left;
    font-size: 24px;
    margin-left: auto;
    margin-top: 22px;
    padding: 12px;
    border-radius: 14px;
    box-shadow: 2px 2px 2px 0px rgba(0,0,0,.4);
    transition: transform .3s;
    letter-spacing: 2px;
    border: 1px solid rgba(200,200,200,.1);
    &:hover {
        transform: scale(1.05);
        transition: transform .4s;
    }
`;