import styled from "styled-components";
import {colors} from "@/shared/theme/colors.ts";

export const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  
  h1 {
    color: ${colors.brand.default}
  }

  p {
    color: ${colors.text.grayscaleSecondary}
  }
`;
