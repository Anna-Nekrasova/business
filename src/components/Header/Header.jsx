import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"
import HeaderButton from "./HeaderButton";
import iconLeft from "../../images/Left.svg";
import iconRight from "../../images/Right.svg";

const StyledHeader = styled.header`
color: #FEFEFE;
max-width: 671px;
margin: 0 auto 16px;
padding-top: 47px;
display: flex;
justify-content: space-between;

@media (max-width: 767px) {
  display: none;
}
`

const Header = (props) => {
const [activeLink, setActiveLink] = React.useState('/business');

const handleClick = (path) => {
  setActiveLink(path);
}

  return (
    <StyledHeader {...props}>
      <Link to="/business" style={{ textDecoration: 'none' }} onClick={() => handleClick('/business')}>
        <HeaderButton text={"о сотруднике"} icon={iconLeft} direction="row" active={+(activeLink === '/business')}></HeaderButton>
      </Link>
      <Link to="/company" style={{ textDecoration: 'none' }} onClick={() => handleClick('/company')}>
        <HeaderButton text={"о компании"} icon={iconRight} direction="row-reverse" active={+(activeLink === '/company')}></HeaderButton>
      </Link>
    </StyledHeader>
  );
}


export default Header;