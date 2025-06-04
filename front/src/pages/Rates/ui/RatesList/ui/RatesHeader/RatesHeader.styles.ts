import styled from "styled-components";
import {BREAKPOINTS} from "@/shared/theme/breakpoints.ts";
import {colors} from "@/shared/theme/colors.ts";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  column-gap: 10px;
  width: 100%;
  margin-bottom: 20px;

  button {
    margin-right: auto;
  }
  
  @media (max-width: ${BREAKPOINTS.desktop}px) {
    flex-direction: column;
    row-gap: 10px;
  }
`;
export const ActionsItem = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const Title = styled.div`
  display: flex;
  color: ${colors.text.grayscaleSecondary};
`;
