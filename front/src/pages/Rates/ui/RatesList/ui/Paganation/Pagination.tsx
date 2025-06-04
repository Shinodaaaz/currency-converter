import {setPage} from "@/store/slices/rates.slice"
import {useAppDispatch} from "@/shared/hooks/useAppDispatch"
import {useAppSelector} from "@/shared/hooks/useAppSelector"
import ArrowRightIcon from "@/shared/assets/icons/arrow-right.svg?react"
import ArrowLeftIcon from "@/shared/assets/icons/arrow-left.svg?react"
import {
  Ellipsis, PageNumber,
  PaginationButton,
  PaginationContainer
} from "@/pages/Rates/ui/RatesList/ui/Paganation/Pagination.styles.ts";

const range = (start: number,
  end: number) => {
  return Array.from({length: end - start + 1},
    (_,
      i) => start + i)
}

export const Pagination = () => {
  const dispatch = useAppDispatch()
  const {
    items,
    perPage,
    page
  } = useAppSelector(state => state.rates)

  const totalPages = Math.ceil(items.length / perPage)

  const handleClick = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      dispatch(setPage(newPage))
    }
  }

  const getPaginationRange = () => {
    const totalPageNumbers = 5

    if (totalPages <= totalPageNumbers) {
      return range(1,
        totalPages)
    }

    const leftSiblingIndex = Math.max(page - 1,
      1)
    const rightSiblingIndex = Math.min(page + 1,
      totalPages)

    const showLeftDots = leftSiblingIndex > 2
    const showRightDots = rightSiblingIndex < totalPages - 1

    const firstPageIndex = 1
    const lastPageIndex = totalPages


    if (!showLeftDots && showRightDots) {
      const leftRange = range(1,
        4);
      return [...leftRange, '...', lastPageIndex];
    }

    if (showLeftDots && !showRightDots) {
      const rightRange = range(totalPages - 3,
        totalPages);
      return [firstPageIndex, '...', ...rightRange];
    }

    if (showLeftDots && showRightDots) {
      const middleRange = range(page - 1,
        page + 1);
      return [firstPageIndex, '...', ...middleRange, '...', lastPageIndex];
    }
  }

  const pages = getPaginationRange()

  return (
    <PaginationContainer>
      <PaginationButton onClick={() => handleClick(page - 1)} disabled={page === 1}>
        <ArrowLeftIcon/>
      </PaginationButton>

      {pages?.map((p,
        idx) =>
        typeof p === 'string' ? (
          <Ellipsis key={`ellipsis-${idx}`}>...</Ellipsis>
        ) : (
          <PageNumber
            key={`page-${p}-${idx}`}
            $active={p === page}
            onClick={() => handleClick(p)}
          >
            {p}
          </PageNumber>
        )
      )}

      <PaginationButton onClick={() => handleClick(page + 1)} disabled={page === totalPages}>
        <ArrowRightIcon/>
      </PaginationButton>
    </PaginationContainer>
  )
}
