import React from "react";
import styled from "styled-components";
// Assets
import FoodIcon from "../../assets/svg/Services/RollerIcon";
import PureWater from "../../assets/svg/Services/MonitorIcon";
import HealthCare from "../../assets/svg/Services/BrowserIcon";
import Accomodation from "../../assets/svg/Services/PrinterIcon";

export default function ServiceBox({icon, title, subtitle}) {
  let getIcon;

  switch (icon) {
    case "food":
      getIcon = <FoodIcon />;
      break;
    case "monitor":
      getIcon = <PureWater />;
      break;
    case "browser":
      getIcon = <HealthCare />;
      break;
    case "printer":
      getIcon = <Accomodation />;
      break;
    default:
      getIcon = <FoodIcon />;
      break;
  }


  return (
    <Wrapper className="flex flexColumn">
      <IconStyle>{getIcon}</IconStyle>
      <TitleStyle className="font20 extraBold">{title}</TitleStyle>
      <SubtitleStyle className="font13">{subtitle}</SubtitleStyle>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const IconStyle = styled.div`
  @media (max-width: 860px) {
    margin: 0 auto;
  }
`;
const TitleStyle = styled.h2`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  padding: 40px 0;
  @media (max-width: 860px) {
    padding: 20px 0;
  }
`;
const SubtitleStyle = styled.p`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
`;