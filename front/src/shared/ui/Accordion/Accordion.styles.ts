import styled from 'styled-components';
import {colors} from "@/shared/theme/colors.ts";

export const AccordionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Item = styled.div`
  border: 1px solid ${colors.border.gray};
  overflow: hidden;
  transition: all 0.3s ease;
`;

export const UppContent = styled.div<{ $isOpen: boolean }>`
  padding: 16px;
  background-color: ${({$isOpen}) => ($isOpen ? colors.grayBlue : colors.darkLight)};
  border: 1px solid ${({$isOpen}) => ($isOpen ? colors.brand.default : 'none')};;
  cursor: pointer;
  user-select: none;
`;

export const Content = styled.div`
  padding: 16px;
  background-color: ${colors.grayBlue};
`;
