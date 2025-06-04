import type {FC, ReactNode} from 'react';
import type {ButtonHTMLAttributes} from "react";
import {ButtonStyled} from "@/shared/ui/Button/Button.styles.ts";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  fullWidth?: boolean;
  fixedWidth?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  children?: ReactNode;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    label,
    fullWidth,
    fixedWidth,
    disabled,
    onClick,
    children,
    ...buttonProps
  } = props;

  return (
    <ButtonStyled
      $fullWidth={fullWidth}
      $fixedWidth={fixedWidth}
      disabled={disabled}
      onClick={onClick}
      {...buttonProps}
    >
      {children}
      {label}
    </ButtonStyled>
  );
};
