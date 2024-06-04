import React from "react";
import styled from "styled-components";

const StyledFooterIconLink = styled.a`
height: 24px;
width: 24px;
cursor: pointer;

&:hover {
    opacity: 0.8;
}

@media (max-width: 767px) {
    height: 52px;
    width: 52px;
}

@media (max-width: 414px) {
    height: 42px;
    width: 42px;
}
`

const StyledFooterIcon = styled.img`
height: 24px;
width: 24px;

@media (max-width: 767px) {
    height: 52px;
    width: 52px;
}
`

const FooterIcon = (props) => {
    return (
        <StyledFooterIconLink {...props} href={props.link} target="_blank">
            <StyledFooterIcon src={props.icon} alt={props.icon}></StyledFooterIcon>
        </StyledFooterIconLink >

    );
}


export default FooterIcon;