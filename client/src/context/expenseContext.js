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
  const [{ transactions }, dispatch] = useReducer(expenseReducer, initialState);

  //  function for calculate both income and expense
  const calculateTransactionAmount = (amountType) => {
    if (transactions.length === 0) return 0;
    return transactions.map((transaction) => {
      const { transactionLists } = transaction;
      // We will use array.reduce function for calculate our income.
      return transactionLists.reduce((totalIncome, transactionList) => {
        if (transactionList.type === amountType) {
          return totalIncome + parseInt(transactionList.amount);
        }
        return totalIncome;
      }, 0);
    })[0];
  };

  // function for get balanced amount
  const getAvailableAmount = () => {
    const income = calculateTransactionAmount("Income");
    const expense = calculateTransactionAmount("Expense");

    return income - expense;
  };

  // functions for dispatch actions
  function handleAddTransactions(transactionInfo) {
    dispatch({ type: ACTIONS.ADD_TRANSACTION, payload: transactionInfo });
  }

  function handleDeleteTransaction(transactionId) {
    dispatch({ type: ACTIONS.DELETE_TRANSACTION, payload: transactionId });
  }

  const value = {
    handleAddTransactions,
    transactions,
    calculateTransactionAmount,
    getAvailableAmount,
    handleDeleteTransaction,
  };
  return (
    <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
  );
};
export default ExpenseProvider;
