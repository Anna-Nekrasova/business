import React from "react";
import styled from "styled-components";

const StyledLogo = styled.img`
margin-top: 32px;
padding: 0 24px 15px;
object-fit: contain;
border-bottom: ${props => props.borderBottom};
height: 81px;
width: 100%;
overflow: hidden;
object-position: center;
grid-area: logo;

@media (max-width: 767px) {
  margin: 27px auto 27px;
  height: 50px;
  padding: 0;
}
`

const Logo = (props) => {
  return (
    <StyledLogo {...props}>
      
    </StyledLogo>
  );
}


export default Logo;