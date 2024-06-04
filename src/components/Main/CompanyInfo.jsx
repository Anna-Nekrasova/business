import React from "react";
import styled from "styled-components";
import Contact from "./Contact";
import { Link } from 'react-router-dom';
import phoneIcon from "../../images/mi_mobile.svg";
import emailIcon from "../../images/mi_email.svg";
import siteIcon from "../../images/mi_link-alt.svg";
import adressIcon from "../../images/mi_location.svg";
import birthdayIcon from "../../images/mi_calendar.svg";
import rankIcon from "../../images/mi_user.svg";
import faxIcon from "../../images/mi_print.svg";

const StyledCompanyInfo = styled.section`
grid-area: info;
margin: 23px 20px 20px 24px;
display: flex;
flex-direction: column;
min-height: 489px;

@media (max-width: 767px) {
  background-color: #FEFEFE;
  margin: 0 16px 0;
  min-height: 368px;
}
`

const StyledList = styled.ul`
list-style-type: none;

@media (max-width: 767px) {
  padding-left: 20px;
  padding-bottom: 16px;
}
`

const CompanyInfo = (props) => {
  return (
    <StyledCompanyInfo {...props}>
        <StyledList>
            <Contact icon={phoneIcon} value={props.info.phone} link={`tel:${props.info.phone}`} indent={"20px"}></Contact>
            <Contact icon={emailIcon} value={'Почта'} link={`https://mail.yandex.ru/compose?mailto=${props.info.email}`} indent={"20px"}></Contact>
            <Contact icon={siteIcon} value={'Личный сайт'} link={props.info.site} indent={"20px"}></Contact>
            <Contact icon={adressIcon} value={props.info.address} cursor={"default"} opacity={1} indent={"20px"}></Contact>
            <Contact icon={birthdayIcon} value={props.info.birthday} cursor={"default"} opacity={1} indent={"20px"}></Contact>
            <Contact icon={rankIcon} value={props.info.clients} cursor={"default"} opacity={1} indent={"20px"}></Contact>
            <Contact icon={faxIcon} value={props.info.fax} cursor={"default"} opacity={1} indent={"20px"}></Contact>
        </StyledList>
    </StyledCompanyInfo>
  );
}


export default CompanyInfo;