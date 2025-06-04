import styled, { keyframes } from "styled-components";
import { colors } from "@/shared/theme/colors";

const shimmer = keyframes`
  0% { background-position: -500px 0; }
  100% { background-position: 500px 0; }
`;

export const SkeletonBox = styled.div<{ $width?: string; $height?: string,  $justifySelf?: boolean}>`
  background: linear-gradient(to right,
  ${colors.gray.secondary} 8%,
  ${colors.border.gray} 18%,
  ${colors.gray.secondary} 33%);
  background-size: 1000px 100%;
  animation: ${shimmer} 1.2s infinite linear;
  border-radius: 6px;
  width: ${({$width}) => $width || "100%"};
  height: ${({$height}) => $height || "16px"};
  justify-self: ${({$justifySelf}) => $justifySelf ? 'center' : ''};
  margin-bottom: 12px;
`;
