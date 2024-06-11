import React from "react";
import styled from "styled-components";
import Contact from "./Contact";
import phoneIcon from "../../images/mi_mobile.svg";
import callIcon from "../../images/mi_call.svg";
import emailIcon from "../../images/mi_email.svg";
import siteIcon from "../../images/mi_link-alt.svg";
import adressIcon from "../../images/mi_location.svg";
import birthdayIcon from "../../images/mi_calendar.svg";
import rankIcon from "../../images/mi_user.svg";


const StyledEmployeeInfo = styled.section`
grid-area: info;
margin: 23px 20px 20px 24px;
display: flex;
flex-direction: column;

@media (max-width: 767px) {
  margin: 0 16px 0;
  background-color: #FEFEFE;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding-top: 20px;
}
`

const StyledName = styled.span`
color: #060606;
font-size: 20px;
font-weight: 700;
line-height: 24px;

@media (max-width: 767px) {
  padding-left: 20px;
}
`

const StyledPosition = styled.span`
color: #455773;
font-size: 14px;
font-weight: 400;
line-height: 16.8px;
margin-top: 12px;
margin-bottom: 22px;

@media (max-width: 767px) {
  margin-top: 8px;
  margin-bottom: 12px;
  padding-left: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid #060606;
  opacity: 0.6;
}
`

const StyledList = styled.ul`
list-style-type: none;

@media (max-width: 767px) {
    padding-left: 20px;
    padding-bottom: 4px;
}
`

const EmployeeInfo = (props) => {
  return (
    <StyledEmployeeInfo {...props}>
        <StyledName>{props.info.surname}</StyledName>
        <StyledName>{props.info.name}</StyledName>
        <StyledPosition>{props.info.position}</StyledPosition>
        <StyledList>
            <Contact icon={phoneIcon} value={props.info.phone} link={`tel:${props.info.phone}`}></Contact>
            <Contact icon={phoneIcon} value={props.info.phone2} link={`tel:${props.info.phone2}`}></Contact>
            <Contact icon={callIcon} value={props.info.phone3} link={`tel:${props.info.phone3}`}></Contact>
            <Contact icon={emailIcon} value={'Почта'} link={`mailto:${props.info.email}`}></Contact>
            <Contact icon={siteIcon} value={'Личный сайт'} link={props.info.site}></Contact>
            <Contact icon={adressIcon} value={props.info.address} cursor={"default"} opacity={1}></Contact>
            <Contact icon={birthdayIcon} value={props.info.birthday} cursor={"default"} opacity={1}></Contact>
            <Contact icon={rankIcon} value={props.info.rank} cursor={"default"} opacity={1}></Contact>
        </StyledList>
    </StyledEmployeeInfo>
  );
}


export default EmployeeInfo;