import React from "react";
import styled from "styled-components";

const StyledCompanyHeader = styled.div`
height: 84px;
border-bottom: 1px solid #060606;
grid-area: header;

@media (max-width: 767px) {
  display: none;
}
`

const CompanyHeader = (props) => {
  return (
    <StyledCompanyHeader {...props}>

    </StyledCompanyHeader>
  );
}


export default CompanyHeader;