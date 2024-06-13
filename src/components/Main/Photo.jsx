import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import Flickity from "react-flickity-component";
import '../../../src/flickity.css';
import man_mobi from "../../images/man_mobi.png";

const flickityOptions = {
  initialIndex: 2,
  wrapAround: true,
  prevNextButtons: false
}

const StyledFlickity = styled(Flickity)`
border-radius: 8.11px;
overflow: hidden;
max-height: 495px;

@media (max-width: 767px) {
  border-radius: 0;
  max-height: 369px;
}
`

const StyledPhoto = styled.img`
object-fit: cover;
height: 495px;
width: 279px;
overflow: hidden;
object-position: center;

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
  const photoArray = Object.values(props.photo);

  return (
    <StyledFlickity
      className="Slider"
      elementType='div'
      disableImagesLoaded={false}
      options={flickityOptions}
      reloadOnUpdate
      static
    >
      {photoArray.map((photo, index) => (
        <StyledPhoto key={index} {...props} src={isMobile ? man_mobi : photo} />
      ))}
    </StyledFlickity>
  );
}

export default Photo;