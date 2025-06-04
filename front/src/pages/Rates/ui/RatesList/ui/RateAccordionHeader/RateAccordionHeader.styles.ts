import styled from "styled-components";
import {colors} from "@/shared/theme/colors.ts";
import {BREAKPOINTS} from "@/shared/theme/breakpoints.ts";

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ImageCodeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 12px;
`;
export const Code = styled.span`
  color: ${colors.text.grayscalePrimary};
  font-weight: 600;
  font-size: 16px;
`;

export const Icon = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
`;

export const IconWrapper = styled.div`
  display: flex;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid ${colors.border.gray};
`;
export const Value = styled.span`
  color: ${colors.white};
  font-size: 16px;

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    font-size: 12px;
  }
`;
