import styled from "styled-components";
import {SkeletonBox} from "@/shared/ui/Skeleton/Skeleton.styles.ts";
import type {FC} from "react";

const Wrapper = styled.div`
  padding: 30px 20px;
`;

interface IConvertSkeleton {
  isMobile: boolean;
}

export const ConvertSkeleton: FC<IConvertSkeleton> = (props) => {
  const {isMobile} = props;

  return (
    <Wrapper>
      {isMobile ?
        <>
          <SkeletonBox $width="100%" $height="483px"/>
        </>
        :
        <>
          <SkeletonBox $width="100%" $height="600px"/>
        </>
      }

    </Wrapper>
  );
};
