import {setSortOrder, setPerPage, setPage} from "@/store/slices/rates.slice";
import {useAppDispatch} from "@/shared/hooks/useAppDispatch.ts";
import {useAppSelector} from "@/shared/hooks/useAppSelector.ts";
import {ActionsItem, Container, Title} from "@/pages/Rates/ui/RatesList/ui/RatesHeader/RatesHeader.styles.ts";
import {Select} from "@/shared/ui/Select/Select.tsx";
import type {SelectOption} from "@/shared/ui/Select/Select.tsx";
import RefreshIcon from '@/shared/assets/icons/refresh.svg?react';
import {Button} from "@/shared/ui/Button/Button.tsx";
import {useRatesFetching} from "@/pages/Rates/hooks/useRatesFetching.ts";
import {useWindowSize} from "@/shared/hooks/useWindowSize.ts";
import {BREAKPOINTS} from "@/shared/theme/breakpoints.ts";

export const RatesHeader = () => {
  const dispatch = useAppDispatch()
  const {
    isLoading,
    refetch
  } = useRatesFetching();
  const size = useWindowSize();
  const isMobile = size < BREAKPOINTS.desktop;

  const {
    sortOrder,
    perPage
  } = useAppSelector(state => state.rates);

  const sortedOptions: SelectOption[] = [
    {
      label: 'Without sorting',
      value: '',
    },
    {
      label: 'Ascending order',
      value: 'asc',
    },
    {
      label: 'Descending order',
      value: 'desc',
    },
  ];

  const elementsPerPageOptions: SelectOption[] = [
    {
      label: '10',
      value: '10',
    },
    {
      label: '20',
      value: '20',
    },
    {
      label: '50',
      value: '50',
    },
    {
      label: '100',
      value: '100',
    },
  ];

  return (
    <Container>
      {!isMobile &&
				<Button
					label={'Refresh'}
					onClick={() => refetch()}
					disabled={isLoading}
				>
					<RefreshIcon/>
				</Button>
      }

      <ActionsItem>
        <Title>
          Sort by:
        </Title>
        <Select
          options={sortedOptions}
          value={sortOrder ?? ''}
          onChange={(value) =>
            dispatch(setSortOrder(value ? (value as 'asc' | 'desc') : null))
          }
        />
      </ActionsItem>
      <ActionsItem>
        <Title>
          Elements per page:
        </Title>
        <Select
          options={elementsPerPageOptions}
          value={perPage.toString()}
          onChange={(value) => {
            dispatch(setPerPage(+value))
            dispatch(setPage(1))
          }}
        />
      </ActionsItem>
    </Container>
  )
}
