import styled from "styled-components";
import {colors} from "@/shared/theme/colors.ts";
import {fonts} from "@/shared/theme/fonts.ts";
import {BREAKPOINTS} from "@/shared/theme/breakpoints.ts";

export const ConvertPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: ${colors.darkLight};
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgb(0 0 0 / 0.1);
  border: 1px solid ${colors.border.gray};

  h1 {
    color: ${colors.white}
  }
`;

export const SelectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

export const ErrorCurrency = styled.div`
  display: flex;
  ${fonts.archivoBold('16px', '24px')};
  color: ${colors.negative};
  margin-top: 10px;
`;

export const ConvertResult = styled.div`
  margin-top: 24px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid ${colors.border.gray};
  background-color: ${colors.grayBlue}CC;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  color: ${colors.dark};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
`;

export const ResultItem = styled.div`
  display: flex;
  align-items: center;
  ${fonts.archivoSemiBold('24px')};
  color: ${colors.text.grayscalePrimary};
  
  svg {
    width: 30px;
    height: 30px;
  }
  
  @media(max-width: ${BREAKPOINTS.tablet}px) {
    ${fonts.archivoSemiBold('12px')};
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;
