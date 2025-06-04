import styled from "styled-components";
import {SkeletonBox} from "@/shared/ui/Skeleton/Skeleton.styles.ts";
import type {FC} from "react";

const Wrapper = styled.div`
  padding: 30px 20px;
`;

interface IRatesSkeleton {
  isMobile: boolean;
}

export const RatesSkeleton: FC<IRatesSkeleton> = (props) => {
  const {isMobile} = props;

  return (
    <Wrapper>
      {isMobile ?
        <>
          <SkeletonBox $width="100%" $height="55px"/>
          <SkeletonBox $width="100%" $height="55px"/>
          <SkeletonBox $width="100%" $height="55px"/>
          <SkeletonBox $width="100%" $height="55px"/>
          <SkeletonBox $width="100%" $height="55px"/>
          <SkeletonBox $width="100%" $height="55px"/>
          <SkeletonBox $width="100%" $height="55px"/>
          <SkeletonBox $width="100%" $height="55px"/>
          <SkeletonBox $width="100%" $height="55px"/>
          <SkeletonBox $width="100%" $height="55px"/>
          <SkeletonBox $width="100%" $height="55px"/>
          <SkeletonBox $width="100%" $height="55px"/>
        </>
        :
        <>
          <SkeletonBox $width="30%" $height="24px"/>
          <SkeletonBox $width="100%" $height="40px"/>
          <SkeletonBox $width="100%" $height="100px"/>
          <SkeletonBox $width="100%" $height="100px"/>
          <SkeletonBox $width="100%" $height="100px"/>
          <SkeletonBox $width="100%" $height="100px"/>
          <SkeletonBox $width="100%" $height="100px"/>
          <SkeletonBox $width="100%" $height="100px"/>
          <SkeletonBox $width="100%" $height="100px"/>
          <SkeletonBox $width="100%" $height="100px"/>
        </>
      }

    </Wrapper>
  );
};
