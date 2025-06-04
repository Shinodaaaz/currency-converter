import {configureStore} from '@reduxjs/toolkit'
import authReducer from '@/store/slices/auth.slice'
import ratesReducer from '@/store/slices/rates.slice'
import {ratesApi} from "@/store/api/rates.api.ts";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [ratesApi.reducerPath]: ratesApi.reducer,
    rates: ratesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ratesApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
