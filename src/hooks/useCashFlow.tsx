import React from "react";
import { useDispatch } from "react-redux";
import { addExpense, addIncome } from "../store/cashflow";
import { useAppSelector } from "../store/hooks";
import { Record } from "../types";

export default function useBalance() {
  const dispatch = useDispatch();
  const Incomes = useAppSelector((state) => state.cashflow.data.incomes);
  const Expenses = useAppSelector((state) => state.cashflow.data.expenses);

  function addRecord(record: Record) {
    if (record.type === "expense") {
      dispatch(addExpense(record));
    }

    if (record.type === "income") {
      dispatch(addIncome(record));
    }
  }

  return { Incomes, Expenses, addRecord };
}
