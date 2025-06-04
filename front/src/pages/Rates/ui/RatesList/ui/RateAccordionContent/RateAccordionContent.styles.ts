import styled from "styled-components";
import {colors} from "@/shared/theme/colors.ts";
import {BREAKPOINTS} from "@/shared/theme/breakpoints.ts";

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Label = styled.span`
  color: ${colors.text.grayscale};

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    font-size: 12px;
  }
`;

export const Value = styled.span`
  color: ${colors.white};

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    font-size: 12px;
  }
`;

export const Change = styled.span<{ $positive: boolean }>`
  color: ${({$positive}) => ($positive ? colors.green : colors.negative)};
  font-weight: bold;

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    font-size: 12px;
  }
`;
