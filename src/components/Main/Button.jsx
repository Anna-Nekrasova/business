import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { Buffer } from "buffer";
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

const StyledLink = styled.a`
text-decoration: none;
width: 165px;
height: 60px;
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

  const [downloadURL, setDownloadURL] = React.useState('');

  React.useEffect(() => {
    const generateVCF = async () => {
      const vCardString = `
      BEGIN:VCARD
      VERSION:3.0
      FN:${props.surname} ${props.name}
      TEL;type=WORK;type=VOICE:${props.phone}
      END:VCARD
      `;

      const base64EncodedString = Buffer.from(vCardString, 'utf8').toString('base64');
      const vcfFileContent = `data:text/vcard;charset=utf-8;base64,${base64EncodedString}`;
      setDownloadURL(vcfFileContent);
    };

    generateVCF();
  }, []);

  return (
    <div>
      {isDesktop && (
        <StyledLink href={downloadURL} download="contact.vcf">
          <StyledButton {...props}>
            ДОБАВИТЬ В КОНТАКТЫ
          </StyledButton>
        </StyledLink>
      )}
      {isMobile && (
        <StyledFlex>
          <StyledLink href={downloadURL} download="contact.vcf">
            <StyledButtonMobi>
              <StyledButtonMobiIcon alt="сохранить" src={save}></StyledButtonMobiIcon>
              <StyledButtonMobiText>СОХРАНИТЬ ВИЗИТКУ</StyledButtonMobiText>
            </StyledButtonMobi>
          </StyledLink>
          <StyledLink href={`tel:${props.phone}`}>
            <StyledButtonMobi>
              <StyledButtonMobiIcon alt="позвонить" src={call}></StyledButtonMobiIcon>
              <StyledButtonMobiText>ПОЗВОНИТЬ</StyledButtonMobiText>
            </StyledButtonMobi>
          </StyledLink>
        </StyledFlex>

      )}
    </div>

  );
}


export default Button;