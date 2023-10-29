import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
//Initial State
const initialState = {
  // transactions: [
  //   { id: 2, text: "Salary", amount: 300, type: "Income" },
  //   { id: 4, text: "Camera", amount: 150, type: "Expense" },
  // ],
  transactions: [
    {
      id: 1,
      date: "10-11-2022",
      list: [
        {
          id: 1,
          text: "Salary",
          amount: 2000,
          type: "Income",
        },
        {
          id: 2,
          text: "Condoms",
          amount: 120,
          type: "Expense",
        },
      ],
    },
    {
      id: 2,
      date: "11-11-2022",
      list: [
        {
          id: 1,
          text: "Shopping",
          amount: 200,
          type: "Expense",
        },
        {
          id: 2,
          text: "House-rent",
          amount: 120,
          type: "Expense",
        },
      ],
    },
  ],
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function deleteTransaction(id) {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  }

  function addTransaction(transaction) {
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
