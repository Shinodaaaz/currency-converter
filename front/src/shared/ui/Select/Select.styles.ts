import styled, { css } from 'styled-components'
import {colors} from "@/shared/theme/colors.ts";
import {fonts} from "@/shared/theme/fonts.ts";

export const Container = styled.div`
  position: relative;
  width: 100%;
`

export const Field = styled.button<{ $hasError: boolean }>`
  position: relative;
  width: 100%;
  height: 48px;
  padding: 14px 16px 10px;
  text-align: left;
  font-size: 16px;
  font-family: 'Archivo', sans-serif;
  font-weight: 600;
  color: ${colors.text.grayscalePrimary};
  background: ${colors.darkLight};
  border: 1px solid ${colors.border.gray};
  border-radius: 4px;
  cursor: pointer;
  appearance: none;
  transition: all 0.2s ease;
  z-index: 1;

  ${fonts.archivoBold('16px', '24px')};

  &:hover {
    border-color: ${colors.border.grayHover};
  }

  &:focus {
    border-color: ${colors.brand.default};
    outline: none;
  }

  ${({ $hasError }) =>
  $hasError &&
  css`
      border-color: ${colors.negative} !important;
      color: ${colors.negative} !important;
    `}
`

export const ErrorText = styled.div`
  margin-top: 4px;
  font-size: 12px;
  color: ${colors.negative};
`

export const Dropdown = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  max-height: 240px;
  overflow-y: auto;
  margin: 4px 0 0;
  padding: 8px 0;
  background: ${colors.darkLight};
  border: 1px solid ${colors.border.gray};
  border-radius: 4px;
  z-index: 10;
`

export const DropdownItem = styled.li<{ $isActive: boolean }>`
  padding: 10px 16px;
  font-size: 16px;
  font-family: 'Archivo', sans-serif;
  font-weight: 500;
  color: ${colors.text.grayscalePrimary};
  cursor: pointer;
  background: ${({$isActive}) =>
          $isActive ? colors.darkLight : 'transparent'};

  &:hover {
    background: ${colors.darkSecondary};
  }
`
