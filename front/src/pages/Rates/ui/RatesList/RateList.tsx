import {useAppSelector} from "@/shared/hooks/useAppSelector.ts";
import {Accordion} from "@/shared/ui/Accordion/Accordion.tsx";
import type {IAccordionItem} from '@/shared/ui/Accordion/Accordion.tsx';
import {RateAccordionHeader} from "@/pages/Rates/ui/RatesList/ui/RateAccordionHeader/RateAccordionHeader.tsx";
import {RateAccordionContent} from "@/pages/Rates/ui/RatesList/ui/RateAccordionContent/RateAccordionContent.tsx";
import {useMemo} from "react";

export const RateList = () => {
  const {
    items,
    sortOrder,
    perPage,
    page
  } = useAppSelector(state => state.rates);

  const sortedItems = useMemo(() => {
      return [...items].sort((a,
        b) => {
        if (sortOrder === 'asc') return a.value - b.value;
        if (sortOrder === 'desc') return b.value - a.value;
        return 0;
      });
    },
    [items, sortOrder]);

  const paginatedItems = useMemo(() => {
      const startIndex = (page - 1) * perPage;
      return sortedItems.slice(startIndex,
        startIndex + perPage);
    },
    [sortedItems, page, perPage]);

  const ratesList = useMemo(() => {
      return paginatedItems.map((item): IAccordionItem => ({
        id: item.code,
        uppContent: (
          <RateAccordionHeader code={item.code} value={item.value}/>
        ),
        mainContent: (
          <RateAccordionContent
            value={item.value}
            prevValue={item.prevValue}
            history={item.history}
          />
        )
      }));
    },
    [paginatedItems]);

  return (
    <>
      <Accordion items={ratesList}/>
    </>
  )
}
