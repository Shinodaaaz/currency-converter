import styled from "styled-components";
import {colors} from "@/shared/theme/colors.ts";
import {BREAKPOINTS} from "@/shared/theme/breakpoints.ts";
import {mixins} from "@/shared/theme/mixins.ts";
import {NavLink} from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 72px;
  background: ${colors.darkLight};
  border-bottom: 1px solid ${colors.border.grayPrimary};
  padding: 20px;

  h1 {
    color: ${colors.white}
  }

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

    @media (min-width: ${BREAKPOINTS.desktop}px) {
      width: 28px;
      height: 28px;
    }

    @media (min-width: ${BREAKPOINTS.wide}px) {
      width: 32px;
      height: 32px;
    }
  }

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    height: 56px;
    padding: 12px;
  }
`;

export const NavList = styled.nav`
  display: flex;
  gap: 24px;
  list-style: none;
`;

export const NavItem = styled(NavLink)`
  text-decoration: none;
  color: ${colors.text.grayscaleSecondary};

  ${mixins.textH5}
  &.active {
    color: ${colors.brand.default};
    border-bottom: 2px solid ${colors.brand.default};
  }
`;

export const UpdateIconWrapper = styled.div<{ $disabled: boolean }>`
  display: flex;
  align-items: center;
  pointer-events: ${(props) => (props.$disabled ? 'none' : 'auto')};
  cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.$disabled ? 0.5 : 1)};
`;
