import {
  Code,
  HeaderWrapper, Icon, IconWrapper, ImageCodeWrapper,
  Value
} from "@/pages/Rates/ui/RatesList/ui/RateAccordionHeader/RateAccordionHeader.styles.ts";
import avax from "@/shared/assets/icons/avax.svg";
import bch from "@/shared/assets/icons/bch.svg";
import bnb from "@/shared/assets/icons/bnb.svg";
import btc from "@/shared/assets/icons/btc.svg";
import doge from "@/shared/assets/icons/doge.svg";
import etc from "@/shared/assets/icons/etc.svg";
import ltc from "@/shared/assets/icons/ltc.svg";
import tron from "@/shared/assets/icons/tron.svg";
import usdc from "@/shared/assets/icons/usdc.svg";
import usdt from "@/shared/assets/icons/usdt.svg";
import uni from "@/shared/assets/icons/uni.svg";
import xrp from "@/shared/assets/icons/xrp.svg";

export const currencyIcons: Record<string, string> = {
  avax,
  bch,
  bnb,
  btc,
  doge,
  etc,
  ltc,
  tron,
  usdc,
  usdt,
  uni,
  xrp,
};

interface Props {
  code: string;
  value: number;
}


export const RateAccordionHeader = ({
  code,
  value
}: Props) => {
  const iconSrc = currencyIcons[code.toLowerCase()];
  return (
    <HeaderWrapper>
      <ImageCodeWrapper>
        {iconSrc ? <Icon src={iconSrc} alt={`${code} icon`} width={24} height={24}/> : <IconWrapper/>}
        <Code>{code}</Code>
      </ImageCodeWrapper>
      <Value>${value.toFixed(18)}</Value>
    </HeaderWrapper>
  );
};
