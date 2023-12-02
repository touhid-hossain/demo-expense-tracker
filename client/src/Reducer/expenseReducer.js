import { createTransctions } from "../stateUpdater/createTransaction";

// Actions
const ACTIONS = {
  DELETE_TRANSACTION: "deleteTransaction",
  ADD_TRANSACTION: "addTransaction",
};

//Initial State
const initialState = {
  transactions: [],
};

// Reducer Function
const expenseReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TRANSACTION:
      return {
        ...state,
        transactions: createTransctions(state, action),
      };

    case ACTIONS.DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.map((transaction) => {
          const result = transaction.transactionLists.filter(
            (tl) => tl.id !== action.payload
          );
          return { ...transaction, transactionLists: result };
        }),
      };

    default:
      return state;
  }
};

export { ACTIONS, initialState, expenseReducer };
