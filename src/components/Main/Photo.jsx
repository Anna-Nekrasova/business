import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import Logo_mobi from "../../images/Logo_mobi.svg";

const StyledPhoto = styled.img`
object-fit: cover;
height: 495px;
width: 279px;
overflow: hidden;
object-position: center;
border-radius: 8.11px;

@media (max-width: 767px) {
  margin: 0 auto 0;
  border-radius: 0;
  object-position: top;
  height: 369px;
  max-width: 375px;
  width: 100%;
}
`

const Photo = (props) => {
  //Временное решение для максимального соответствия макету
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <StyledPhoto {...props} src={isMobile ? Logo_mobi : props.avatar}>

    </StyledPhoto>
  );
}


export default Photo;