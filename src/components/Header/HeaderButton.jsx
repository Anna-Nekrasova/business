import React from "react";
import styled from "styled-components";

const StyledHeaderButton = styled.button`
all: unset;
height: 17px;
opacity: ${props => props.active ? 1 : 0.5};
color: #fefefe;
display: flex;
flex-direction: ${props => props.direction};
cursor: ${props => props.active ? 'default' : 'pointer'};

&:hover {
  opacity: ${props => props.active ? 1 : 0.4};
}
`

const StyledHeaderButtonIcon = styled.img`
width: 16px;
height: 11px;
margin: 2px 12px 0 12px;
`

const StyledHeaderButtonText = styled.span`
vertical-align: middle;
font-weight: 400;
font-size: 14px;
line-height: 16.8px;
`


const HeaderButton = (props) => {
  return (
    <StyledHeaderButton {...props}>
      <StyledHeaderButtonIcon src={props.icon} />
      <StyledHeaderButtonText>{props.text}</StyledHeaderButtonText>
    </StyledHeaderButton>
  );
}


export default HeaderButton;