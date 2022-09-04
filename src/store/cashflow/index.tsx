import { createSlice } from "@reduxjs/toolkit";
import { Finances } from "../../types";

interface initialState {
  data: Finances;
}
const InitialState: initialState = {
  data: {
    incomes: [
      {
        value: 0,
        description: "",
        parcels: 0,
      },
    ],
    expenses: [
      {
        value: 0,
        description: "",
        parcels: 0,
      },
    ],
  },
};
const CashFlowReducer = createSlice({
  name: "cashflow",
  initialState: InitialState,
  reducers: {
    updateCashFlow(state, action) {
      state.data = action.payload;
    },
    addExpense(state, action) {
      state.data.expenses.push(action.payload);
    },
    addIncome(state, action) {
      state.data.incomes.push(action.payload);
    },
  },
});

export const { updateCashFlow, addExpense, addIncome } = CashFlowReducer.actions;
export default CashFlowReducer.reducer;
