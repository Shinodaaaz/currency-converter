import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import type {RateItem} from "@/store/api/rates.api.ts";

export type SortOrder = 'asc' | 'desc' | null;

type RatesState = {
  items: RateItem[];
  isLoading: boolean;
  sortOrder: SortOrder;
  perPage: number;
  page: number;
  lastUpdate: number;
  isInitialized: boolean;
};

const initialState: RatesState = {
  items: [],
  isLoading: false,
  sortOrder: null,
  perPage: 10,
  page: 1,
  lastUpdate: Date.now(),
  isInitialized: false,
};


const ratesSlice = createSlice({
  name: 'rates',
  initialState,
  reducers: {
    setRates(state,
      action: PayloadAction<RateItem[]>) {
      const newItems: RateItem[] = action.payload.map(({
        code,
        value,
        history,
        prevValue
      }) => {
        return {
          code,
          value,
          prevValue: prevValue,
          history,
        };
      });

      state.items = newItems;
      state.lastUpdate = Date.now();
      state.isInitialized = true;
    },
    setLoading(state,
      action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setSortOrder(state,
      action: PayloadAction<SortOrder>) {
      state.sortOrder = action.payload;
    },
    setPerPage(state,
      action: PayloadAction<number>) {
      state.perPage = action.payload;
    },
    setPage(state,
      action: PayloadAction<number>) {
      state.page = action.payload;
    },
    setInitialized(state,
      action: PayloadAction<boolean>) {
      state.isInitialized = action.payload;
    },
  },
});

export const {
  setRates,
  setLoading,
  setSortOrder,
  setPerPage,
  setPage,
  setInitialized,
} = ratesSlice.actions;

export default ratesSlice.reducer;
