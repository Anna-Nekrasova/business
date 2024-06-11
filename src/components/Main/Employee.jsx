import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import employee from "../../data/employee";
import EmployeePhotoAndButton from "./EmployeePhotoAndButton";
import EmployeeInfo from "./EmployeeInfo";
import Footer from "../Footer/Footer";

const StyledEmployee = styled.div`
display: grid;
grid-template-columns: 311px auto;
grid-template-rows: 113px auto;
grid-template-areas:
"photo logo"
"photo info";

@media (max-width: 767px) {
  grid-template-columns: auto;
  grid-template-rows: 104px 413px auto;
  grid-template-areas:
  "logo"
  "photo"
  "info";
}
`

const Employee = (props) => {
  return (
    <div>
      <StyledEmployee {...props}>
        <Logo src={employee.logo} $borderBottom="1px solid #060606"></Logo>
        <EmployeePhotoAndButton photo={employee.photo} phone={employee.phone} name={employee.name} surname={employee.surname}></EmployeePhotoAndButton>
        <EmployeeInfo info={employee}></EmployeeInfo>
      </StyledEmployee>
      <Footer></Footer>
    </div>
  );
}


export default Employee;