import React from "react";
import styled from "styled-components";
import Photo from "./Photo";
import Button from "./Button";

const StyledEmployeePhotoAndButton = styled.div`
margin: 32px 0 23px 32px;
display: flex;
flex-direction:column;
grid-area: photo;
position: relative;

@media (max-width: 767px) {
  margin: 0 auto 0;
  width: 375px;
  max-width: 375px;
}
`

const EmployeePhotoAndButton = (props) => {
  return (
    <StyledEmployeePhotoAndButton {...props}>
      <Photo photo={props.photo}></Photo>
      <Button phone={props.phone}  name={props.name} surname={props.surname}></Button>
    </StyledEmployeePhotoAndButton>
  );
}


export default EmployeePhotoAndButton;