import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import save from "../../images/save.svg";
import call from "../../images/call.svg";

const StyledButton = styled.button`
all: inset;
border: none;
margin-top: 16px;
background-color: #060606;
width: 279px;
height: 50px;
border-radius: 8.11px;
color:#FEFEFE;
font-weight: 700;
font-size: 12px;
line-height: 50px;
cursor: pointer;

&:hover {
    opacity: 0.92;
  }
`

const StyledFlex = styled.div`
display: flex;
height: 44px;
justify-content: center;
gap: 13px;
position: absolute;
left: 16px;
bottom: 28px;
`

const StyledButtonMobi = styled.button`
all: inset;
border: none;
display: flex;
border-radius: 6px;
width: 165px;
height: 60px;
cursor: pointer;
background-color: #FEFEFE;
box-shadow: 0px 4.05px 5.68px 0px rgba(0, 0, 0, 0.03);

&:hover {
  opacity: 0.92;
}
`

const StyledButtonMobiIcon = styled.img`
margin: 15px 12px 0 20px;
width: 30px;
height: 30px;
`

const StyledButtonMobiText = styled.span`
color: #313131;
margin: auto 20px auto 0;
text-align: start;
font-weight: 700;
font-size: 12px;
line-height: 14.4px;
`

const Button = (props) => {
  const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <div>
      {isDesktop && (
        <StyledButton {...props}>
          ДОБАВИТЬ В КОНТАКТЫ
        </StyledButton>
      )}
      {isMobile && (
        <StyledFlex>
          <StyledButtonMobi>
            <StyledButtonMobiIcon alt="сохранить" src={save}></StyledButtonMobiIcon>
            <StyledButtonMobiText>СОХРАНИТЬ ВИЗИТКУ</StyledButtonMobiText>
          </StyledButtonMobi>
          <StyledButtonMobi>
            <StyledButtonMobiIcon alt="позвонить" src={call}></StyledButtonMobiIcon>
            <StyledButtonMobiText>ПОЗВОНИТЬ</StyledButtonMobiText>
          </StyledButtonMobi>

        </StyledFlex>

      )}
    </div>

  );
}


export default Button;