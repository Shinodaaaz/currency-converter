import styled from "styled-components";
import {colors} from "@/shared/theme/colors.ts";
import {fonts} from "@/shared/theme/fonts.ts";

interface ButtonStyledProps {
  $fullWidth?: boolean;
  $fixedWidth?: boolean;
  disabled?: boolean;
}

export const ButtonStyled = styled.button<ButtonStyledProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  cursor: pointer;
  white-space: nowrap;
  text-decoration: none;
  transition: all 0.2s ease;
  background: ${colors.brand.default};
  color: ${colors.text.invertDefault};
  border: 1px solid #ffffff3d;
  box-shadow: 0 3px 3px -1px #00000026;
  height: 40px;

  ${fonts.archivoSemiBold('16px',
          '24px')}
  ${({$fullWidth}) => $fullWidth && `
    width: 100%;
  `}
  ${({$fixedWidth}) => $fixedWidth && `
    width: 200px;
  `}
  &:hover:not(:disabled) {
    background: ${colors.brand.hover};
  }

  &:active:not(:disabled) {
    background: ${colors.brand.pressed};
  }

  &:disabled {
    background: ${colors.brand.disabled};
    border: 1px solid ${colors.border.grayPrimary};
    cursor: not-allowed;
    opacity: 0.6;
  }

  svg {
    path {
      stroke: ${colors.text.invertDefault}
    }
  }
`;
