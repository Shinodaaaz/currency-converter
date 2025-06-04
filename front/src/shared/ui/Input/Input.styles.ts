import styled, { css } from 'styled-components'
import {fonts} from "@/shared/theme/fonts.ts";
import {colors} from "@/shared/theme/colors.ts";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 77px;
  margin-bottom: 16px;
`

export const Field = styled.input<{ $hasLeftIcon?: boolean; $hasRightIcon?: boolean; $hasError?: boolean }>`
  position: relative;
  padding: 14px 16px 10px;
  height: 48px;
  width: 100%;
  font-size: 16px;
  line-height: 1.5;
  font-family: 'Archivo', sans-serif;
  font-weight: 600;
  border: 1px solid ${colors.border.gray};
  border-radius: 4px;
  background: ${colors.darkLight};
  color: ${colors.text.grayscalePrimary};
  transition: all 0.2s ease;
  z-index: 0;
  ${fonts.archivoBold('16px',
          '24px')};

  &:-webkit-autofill {
    background-color: ${colors.darkLight}
    -webkit-text-fill-color: ${colors.text.grayscalePrimary};
    color: ${colors.text.grayscalePrimary};
    ${fonts.archivoBold('16px',
            '24px')};
  }

  &::placeholder {
    color: ${colors.text.grayscale};
    opacity: 1;
  }

  &:hover {
    border-color: ${colors.border.grayHover};
  }

  &:focus {
    border-color: ${colors.brand.default};
    outline: none;
  }

  ${({$hasLeftIcon}) => $hasLeftIcon && css`
    padding-left: 40px;
  `}
  ${({$hasRightIcon}) => $hasRightIcon && css`
    padding-right: 40px;
  `}
  ${({$hasError}) => $hasError && css`
    border-color: ${colors.negative} !important;
    color: ${colors.negative} !important;
  `}
    /* Chrome, Safari, Edge, Opera */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */

  &[type='number'] {
    -moz-appearance: textfield;
  }
`

export const Label = styled.label<{ $isFocused: boolean; $hasError?: boolean }>`
  position: absolute;
  top: -8px;
  left: 12px;
  padding: 0 4px;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  background: ${colors.darkLight};
  color: ${({$hasError, $isFocused }) =>
          $hasError ? colors.negative :
                  $isFocused ? colors.brand.default :
                          colors.text.grayscale};
  ${fonts.interMedium('12px', '18px')};

  z-index: 2;
  pointer-events: none;
  transition: all 0.2s ease;
`

export const Icon = styled.div<{ $position: 'left' | 'right' }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  opacity: 0.7;
  transition: opacity 0.2s ease;
  cursor: pointer;
  z-index: 1;

  ${({ $position }) => $position === 'left' ? css`
    left: 12px;
  ` : css`
    right: 12px;
    top: 26px;
    background: transparent;
    border: none;
    padding: 0;
  `}

  &:hover {
    opacity: 1;
  }
`

export const ErrorText = styled.div`
  display: flex;
  align-items: center;
  column-gap: 6px;
  font-size: 12px;
  line-height: 18px;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  color: ${colors.negative};
  margin-top: 4px;
  padding: 0 4px;
  height: 18px;
  transition: all 0.2s ease;
`
