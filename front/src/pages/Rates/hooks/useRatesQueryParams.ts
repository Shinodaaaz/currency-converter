import {useEffect} from "react";
import {useAppDispatch} from "@/shared/hooks/useAppDispatch.ts";
import {setPage, setPerPage, setSortOrder, setInitialized} from "@/store/slices/rates.slice";
import {useAppSelector} from "@/shared/hooks/useAppSelector.ts";

const getRatesParamsFromQuery = () => {
  const params = new URLSearchParams(window.location.search)
  const sortOrder = params.get('sort') as 'asc' | 'desc' | null
  const perPage = parseInt(params.get('perPage') || '10',
    10)
  const page = parseInt(params.get('page') || '1',
    10)

  return {
    sortOrder: sortOrder || null,
    perPage: isNaN(perPage) ? 10 : perPage,
    page: isNaN(page) ? 1 : page,
  }
}

const setRatesParamsToQuery = ({
  sortOrder,
  perPage,
  page,
}: {
  sortOrder: 'asc' | 'desc' | null
  perPage: number
  page: number
}) => {
  const searchParams = new URLSearchParams(window.location.search)

  if (sortOrder) searchParams.set('sort',
    sortOrder)
  else searchParams.delete('sort')

  searchParams.set('perPage',
    perPage.toString())
  searchParams.set('page',
    page.toString())

  const newQuery = `${window.location.pathname}?${searchParams.toString()}`
  window.history.replaceState(null,
    '',
    newQuery)
}

export const useRatesQueryParams = () => {
  const dispatch = useAppDispatch();
  const {
    sortOrder,
    page,
    perPage,
    isInitialized
  } = useAppSelector((state) => state.rates);

  useEffect(() => {
      const {
        sortOrder,
        page,
        perPage
      } = getRatesParamsFromQuery();
      dispatch(setSortOrder(sortOrder));
      dispatch(setPage(page));
      dispatch(setPerPage(perPage));
      dispatch(setInitialized(true));
    },
    []);

  useEffect(() => {
      if (!isInitialized) return;
      setRatesParamsToQuery({
        sortOrder,
        page,
        perPage
      });
    },
    [sortOrder, page, perPage, isInitialized]);
};
