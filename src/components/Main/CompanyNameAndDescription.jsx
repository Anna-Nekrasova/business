import React from "react";
import styled from "styled-components";
import company from "../../data/company";
import Logo from "./Logo";
import { useMediaQuery } from "react-responsive";

const StyledCompanyNameAndDescription = styled.div`
grid-area: name;
display: flex;
flex-direction: column;

@media (max-width: 767px) {
  margin: 16px 16px 0;
  background-color: #FEFEFE;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}
`

const StyledName = styled.span`
color: #060606;
font-family: Abhaya, Arial, sans-serif;
font-size: 20px;
font-weight: 800;
line-height: 24px;
margin: 32px 4px 0 32px;

@media (max-width: 767px) {
  margin: 20px 20px 12px;
}
`

const StyledDescription = styled.span`
color: #060606;
font-size: 14px;
font-weight: 700;
line-height: 16.8px;
margin: 12px 4px 10px 32px;

@media (max-width: 767px) {
  margin: 0 0 16px;
  color: #455773;
  font-weight: 400;
  padding: 0 20px 13px;
  border-bottom: 1px solid #060606;
}
`

const CompanyNameAndDescription = (props) => {
  const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });

  return (
    <StyledCompanyNameAndDescription {...props}>
      {isDesktop && (
        <Logo src={props.src} $borderBottom="none"></Logo>
      )}
      <StyledName>{company.name}</StyledName>
      <StyledDescription>{company.description}</StyledDescription>
    </StyledCompanyNameAndDescription>
  );
}


export default CompanyNameAndDescription;