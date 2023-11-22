import React, { useContext } from "react";
import { createContext, useReducer } from "react";
import {
  initialState,
  expenseReducer,
  ACTIONS,
} from "../Reducer/expenseReducer";

// Create Context
const ExpenseContext = React.createContext();

// create custom hook for consume context value
export const useExpense = () => {
  return useContext(ExpenseContext);
};

// Provider Component
const ExpenseProvider = ({ children }) => {
  const [state, dispatch] = useReducer(expenseReducer, initialState);
  console.log(state);

  // functions for dispatch actions
  function handleAddTransactions(transactionInfo) {
    dispatch({ type: ACTIONS.ADD_TRANSACTION, payload: transactionInfo });
  }

  const value = { handleAddTransactions };
  return (
    <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
  );
};
export default ExpenseProvider;
