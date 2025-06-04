import {useMemo, useCallback} from 'react';
import {useSearchParams} from 'react-router-dom';
import {useGetRatesQuery, useGetConvertRateQuery} from '@/store/api/rates.api';
import {
  ConvertPageWrapper,
  ConvertResult,
  ErrorCurrency,
  ResultItem,
  SelectsWrapper,
} from '@/pages/Convert/ConvertPage.styles';
import {Input} from '@/shared/ui/Input/Input';
import {Select} from '@/shared/ui/Select/Select';
import type {SelectOption} from '@/shared/ui/Select/Select';
import {ActionsItem, Title} from '@/pages/Rates/ui/RatesList/ui/RatesHeader/RatesHeader.styles';
import {useWindowSize} from '@/shared/hooks/useWindowSize';
import {BREAKPOINTS} from '@/shared/theme/breakpoints';
import ConvertIcon from '@/shared/assets/icons/convert.svg?react';
import {ConvertSkeleton} from '@/pages/Convert/ConvertSkeleton';
import {ServerErrors} from '@/shared/ui/ServerErrors/ServerErrors';

export const ConvertPage = () => {
  const {
    data: ratesData,
    isLoading
  } = useGetRatesQuery();
  const [searchParams, setSearchParams] = useSearchParams();

  const fromCurrency = searchParams.get('from') || 'BTC';
  const toCurrency = searchParams.get('to') || 'USD';
  const amount = Number(searchParams.get('amount') || 1);

  const {
    data: rate,
    error: rateError,
    isLoading: isRateLoading,
  } = useGetConvertRateQuery(
    {
      from: fromCurrency,
      to: toCurrency
    },
    {skip: fromCurrency === toCurrency}
  );

  const updateParam = useCallback(
    (key: string,
      value: string) => {
      const newParams = new URLSearchParams(searchParams);
      newParams.set(key,
        value);
      setSearchParams(newParams);
    },
    [searchParams, setSearchParams]
  );

  const currencies = ratesData?.map((r) => r.code) || [];
  const currenciesOptions: SelectOption[] = useMemo(
    () => currencies.map((cur) => ({
      label: cur,
      value: cur
    })),
    [currencies]
  );

  const size = useWindowSize();
  const isMobile = size < BREAKPOINTS.desktop;

  const result = rate ? amount * rate : 0;
  const commission = result * 0.03;
  const finalAmount = result + commission;

  if (isLoading || isRateLoading) return <ConvertSkeleton isMobile={isMobile}/>;
  if (rateError) return <ServerErrors/>;

  return (
    <ConvertPageWrapper>
      {!isMobile && <h1>Currency Converter</h1>}

      <Input
        id="amount"
        type="number"
        min={1}
        value={amount}
        label="Amount"
        onChange={(e) => updateParam('amount',
          e.target.value)}
      />

      <SelectsWrapper>
        <ActionsItem>
          <Title>From currency:</Title>
          <Select
            value={fromCurrency}
            onChange={(val) => updateParam('from',
              val)}
            options={currenciesOptions}
          />
        </ActionsItem>

        <ActionsItem>
          <Title>In currency:</Title>
          <Select
            value={toCurrency}
            onChange={(val) => updateParam('to',
              val)}
            options={currenciesOptions}
          />
        </ActionsItem>
      </SelectsWrapper>

      {fromCurrency === toCurrency && (
        <ErrorCurrency>Choose different currencies</ErrorCurrency>
      )}

      <ConvertResult>
        <ResultItem>{amount} {fromCurrency}</ResultItem>
        <ResultItem><ConvertIcon/></ResultItem>
        <ResultItem>{finalAmount.toLocaleString(undefined,
          {
            minimumFractionDigits: 2,
            maximumFractionDigits: 6
          })} {toCurrency}</ResultItem>
        <ResultItem>{result.toFixed(18)} + 3%</ResultItem>
      </ConvertResult>
    </ConvertPageWrapper>
  );
};

