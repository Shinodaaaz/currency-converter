import {RateList} from "@/pages/Rates/ui/RatesList/RateList.tsx";
import {Pagination} from "@/pages/Rates/ui/RatesList/ui/Paganation/Pagination.tsx";
import {RatesHeader} from "@/pages/Rates/ui/RatesList/ui/RatesHeader/RatesHeader.tsx";
import {useWindowSize} from "@/shared/hooks/useWindowSize.ts";
import {BREAKPOINTS} from "@/shared/theme/breakpoints.ts";
import {useRatesQueryParams} from "@/pages/Rates/hooks/useRatesQueryParams.ts";
import {useRatesFetching} from "@/pages/Rates/hooks/useRatesFetching.ts";
import {RatesWrapper} from "@/pages/Rates/RatesWrapper.styles.ts";
import type {FC} from 'react';
import {RatesSkeleton} from "@/pages/Rates/ui/RatesSkeleton/Skeleton.tsx";
import {ServerErrors} from "@/shared/ui/ServerErrors/ServerErrors.tsx";

const RatesPage: FC = () => {
  const size = useWindowSize();
  useRatesQueryParams();
  const {
    error,
    isLoading
  } = useRatesFetching();

  const isMobile = size < BREAKPOINTS.desktop;

  if (isLoading) return <RatesSkeleton isMobile={isMobile}/>
  if (error) return <ServerErrors/>

  return (
    <RatesWrapper>
      {!isMobile && <h2>Rates currency</h2>}
      <RatesHeader/>
      <RateList/>
      <Pagination/>
    </RatesWrapper>
  )
}

export default RatesPage;
