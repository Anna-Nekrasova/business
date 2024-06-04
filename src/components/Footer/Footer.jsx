import React from "react";
import styled from "styled-components";
import social from "../../data/social";
import FooterIcon from "./FooterIcon";
import tg from "../../images/Telegram.svg";
import whatsapp from "../../images/Whatsapp.svg";
import viber from "../../images/Viber.svg";
import inst from "../../images/Instagram.svg";
import vk from "../../images/VK.svg";
import facebook from "../../images/Facebook.svg";
import youtube from "../../images/YouTube.svg";
import ok from "../../images/Ok.svg";
import dzen from "../../images/Dzen.svg";
import tiktok from "../../images/Tiktok.svg";
import linkedin from "../../images/Linked_in.svg";

const StyledFooter = styled.footer`
color: #060606;
margin: 0 auto 0;
padding: 24px 32px 32px;
max-width: 648px;
height: 80px;
background-color: #F4F4F4;
border-top: 1px solid #060606;
border-bottom-right-radius: 8px;
border-bottom-left-radius: 8px;
display: flex;
justify-content: space-between;

@media (max-width: 767px) {
  height: 302px;
  margin: 0 16px 0;
  padding: 24px 20px 40px;
  background-color: #FEFEFE;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  flex-wrap: wrap;
  justify-content: start;
  gap: 31px;
}

`

const Footer = (props) => {
  return (
    <StyledFooter {...props}>
      <FooterIcon icon={tg} link={social.tg}></FooterIcon>
      <FooterIcon icon={whatsapp} link={social.whatsapp}></FooterIcon>
      <FooterIcon icon={viber} link={social.viber}></FooterIcon>
      <FooterIcon icon={inst} link={social.inst}></FooterIcon>
      <FooterIcon icon={vk} link={social.vk}></FooterIcon>
      <FooterIcon icon={facebook} link={social.facebook}></FooterIcon>
      <FooterIcon icon={youtube} link={social.youtube}></FooterIcon>
      <FooterIcon icon={ok} link={social.ok}></FooterIcon>
      <FooterIcon icon={dzen} link={social.dzen}></FooterIcon>
      <FooterIcon icon={tiktok} link={social.tiktok}></FooterIcon>
      <FooterIcon icon={linkedin} link={social.linkedin}></FooterIcon>
    </StyledFooter>
  );
}


export default Footer;