import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {colors} from "@/shared/theme/colors.ts";
import {BREAKPOINTS} from "@/shared/theme/breakpoints.ts";
import {fonts} from "@/shared/theme/fonts.ts";

export const FooterContainer = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${colors.darkLight};
  border-top: 1px solid ${colors.border.grayPrimary};
  z-index: 1000;
  padding: 12px;
`;

export const TabLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 4px;
  ${fonts.interBold('14px')}
  color: ${colors.text.grayscaleSecondary};
  text-decoration: none;

  svg {
    cursor: pointer;

    &:hover {
      path {
        stroke: ${colors.brand.default};
      }
    }

    @media (min-width: ${BREAKPOINTS.tablet}px) {
      width: 24px;
      height: 24px;
    }
  }

  &.active {
    color: ${colors.brand.default};

    svg {
      path {
        stroke: ${colors.brand.default}
      }
    }
  }
`;
