import React from "react";
import styled from "styled-components";

const StyledContact = styled.li`
display: flex;

margin-bottom: ${props => props.indent || "12px"};
`

const StyledContactIcon = styled.img`
width: 24px;
height: 24px;
margin: 4px 12px 4px 0;
`

const StyledContactInfo = styled.a`
text-decoration: none;
margin-top: 8px;
color: #060606;
font-size: 15px;
font-weight: 400;
line-height: 18px;
max-width: 250px;
cursor: ${props => (props.cursor === "default" ? "default" : "pointer")};
&:hover {
    opacity: ${props => (props.opacity === 1 ? 1 : 0.6)};
  }

`

const Contact = (props) => {
    return (
        <StyledContact {...props}>
            <StyledContactIcon src={props.icon}></StyledContactIcon>
            <StyledContactInfo href={props.link} target="_blank" cursor={props.cursor} opacity={props.opacity}>{props.value}</StyledContactInfo>
        </StyledContact>
    );
}


export default Contact;