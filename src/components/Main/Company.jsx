import React from "react";
import styled from "styled-components";
import company from "../../data/company";
import CompanyInfo from "./CompanyInfo";
import CompanyHeader from "./CompanyHeader";
import CompanyNameAndDescription from "./CompanyNameAndDescription";
import Footer from "../Footer/Footer";

const StyledCompany = styled.div`
display: grid;
grid-template-columns: 311px auto;
grid-template-rows: 84px auto;
grid-template-areas:
"header header"
"name info";

@media (max-width: 767px) {
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  grid-template-areas:
  "name"
  "info";
`

const Company = (props) => {
  return (
    <div>
      <StyledCompany {...props}>
        <CompanyHeader></CompanyHeader>
        <CompanyNameAndDescription src={company.logo}></CompanyNameAndDescription>
        <CompanyInfo info={company}></CompanyInfo>
      </StyledCompany>
      <Footer></Footer>
    </div>
  );
}


export default Company;