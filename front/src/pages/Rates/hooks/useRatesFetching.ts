import {useEffect} from "react";
import {useGetRatesQuery} from "@/store/api/rates.api";
import {useAppDispatch} from "@/shared/hooks/useAppDispatch";
import {setLoading, setRates} from "@/store/slices/rates.slice";

export const useRatesFetching = () => {
  const dispatch = useAppDispatch();
  const {
    data,
    error,
    isLoading,
    refetch,
  } = useGetRatesQuery();


  useEffect(() => {
      dispatch(setLoading(isLoading));
      if (data && data.length > 0) {
        dispatch(setRates(data));
      }
    },
    [data, isLoading]);

  useEffect(() => {
      const interval = setInterval(() => {
          refetch();
        },
        30_000);

      return () => clearInterval(interval);
    },
    [refetch]);

  return {
    error,
    isLoading,
    refetch
  };
};
