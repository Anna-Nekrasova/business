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
  max-width: 375px;
}
`

const EmployeePhotoAndButton = (props) => {
  return (
    <StyledEmployeePhotoAndButton {...props}>
      <Photo avatar={props.photo}></Photo>
      <Button></Button>
    </StyledEmployeePhotoAndButton>
  );
}


export default EmployeePhotoAndButton;