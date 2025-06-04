import styled from "styled-components"
import {colors} from "@/shared/theme/colors.ts";
import {fonts} from "@/shared/theme/fonts.ts";
import {BREAKPOINTS} from "@/shared/theme/breakpoints.ts";

export const PaginationContainer = styled.div`
  display: flex;
  gap: 8px;
  justify-content: end;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 1rem;

  @media (max-width: ${BREAKPOINTS.desktop}px) {
    gap: 4px;
  }

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    justify-content: center;
  }
`

export const PaginationButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${colors.text.grayscale};
  padding: 4px;
  display: flex;
  align-items: center;

  &:disabled {
    opacity: 0.4;
    cursor: default;
  }
`

export const PageNumber = styled.button<{ $active: boolean }>`
  ${fonts.interMedium("14px")};
  border-radius: 6px;
  padding: 6px 10px;
  background-color: ${({ $active }) =>
          $active ? colors.brand.default : "transparent"};
  color: ${({ $active }) =>
          $active ? colors.text.invertDefault : colors.text.grayscale};
  border: 1px solid ${colors.border.grayPrimary};
  cursor: pointer;

  &:hover {
    background-color: ${colors.brand.hover};
  }

  @media (max-width: ${BREAKPOINTS.desktop}px) {
    padding: 4px 8px;
  }
`

export const Ellipsis = styled.span`
  ${fonts.interMedium("14px")};
  color: ${colors.text.grayscaleDisabled};
  padding: 6px 10px;

  @media (max-width: ${BREAKPOINTS.desktop}px) {
    padding: 4px 6px;
  }
`
