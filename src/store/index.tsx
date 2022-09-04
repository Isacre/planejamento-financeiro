import { configureStore } from "@reduxjs/toolkit";
import CashFlowReducer from "./cashflow";

export const store = configureStore({
  reducer: {
    cashflow: CashFlowReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
