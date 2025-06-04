import {useState} from 'react'
import {
  Container,
  Field,
  Label,
  Icon,
  ErrorText
} from './Input.styles'
import type {InputHTMLAttributes, ReactNode} from "react";
import type {FC} from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string
  label?: string
  error?: string
  iconLeft?: ReactNode
  iconRight?: ReactNode
  onRightIconClick?: () => void
}

export const Input: FC<InputProps> = ({
  id,
  label,
  error,
  iconLeft,
  iconRight,
  onRightIconClick,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Container>
      {iconLeft && (
        <Icon $position="left">
          {iconLeft}
        </Icon>
      )}

      <Field
        id={id}
        $hasLeftIcon={!!iconLeft}
        $hasRightIcon={!!iconRight}
        $hasError={!!error}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...rest}
      />

      {label && (
        <Label htmlFor={id} $isFocused={isFocused || !!rest.value} $hasError={!!error}>
          {label}
        </Label>
      )}

      {iconRight && (
        <Icon $position="right" onClick={onRightIconClick}>
          {iconRight}
        </Icon>
      )}

      {error && (
        <ErrorText>
          {error}
        </ErrorText>
      )}
    </Container>
  )
}
