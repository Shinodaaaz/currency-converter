import type {FC} from "react";
import {FooterContainer, TabLink} from "./Footer.styles";
import RatesIcon from "@/shared/assets/icons/rates.svg?react";
import ConvertIcon from "@/shared/assets/icons/convert.svg?react";

export const Footer: FC = () => {
  return (
    <FooterContainer>
      <TabLink to="/rates" className={({isActive}) => isActive ? "active" : ""}>
        <RatesIcon/>
        Rates
      </TabLink>
      <TabLink to="/convert" className={({isActive}) => isActive ? "active" : ""}>
        <ConvertIcon/>
        Convert
      </TabLink>
    </FooterContainer>
  );
};
