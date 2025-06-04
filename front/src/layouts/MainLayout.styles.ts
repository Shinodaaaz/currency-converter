import styled from "styled-components";
import {BREAKPOINTS} from "@/shared/theme/breakpoints.ts";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const MainLayoutWrapper = styled.main`
  flex: 1 1 auto;
  padding: 56px 20px 70px;
  box-sizing: border-box;
  overflow-y: auto;

  @media (max-width: ${BREAKPOINTS.desktop}px) {
    padding: 46px 20px 80px;
  }
`;
