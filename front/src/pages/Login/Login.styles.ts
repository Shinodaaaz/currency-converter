import styled from "styled-components";
import {colors} from "@/shared/theme/colors.ts";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 18px;
  height: 100vh;
`;

export const Title = styled.h1`
  color: ${colors.white};
`;

export const FormWrapper = styled.form`
  background: ${colors.darkLight };
  padding: 35px 30px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgb(0 0 0 / 0.1);
  min-width: 320px;
  max-width: 640px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
