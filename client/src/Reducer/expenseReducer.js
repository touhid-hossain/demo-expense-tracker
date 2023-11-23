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
      //   Create function that makes our structure

      const createTransctions = () => {
        const workingTransctions = [...state.transactions];
        const transactionDate = new Date().getDate();
        const findIndex = workingTransctions.findIndex(
          (t) => t.transactionDate === transactionDate
        );

        if (findIndex < 0) {
          workingTransctions.push({
            transactionDate,
            transactionLists: [
              { ...action.payload, id: Math.floor(Math.random() * 100000) },
            ],
          });
        } else {
          workingTransctions[findIndex].transactionLists.push({
            ...action.payload,
            id: Math.floor(Math.random() * 100000),
          });
        }

        return workingTransctions;
      };

      return {
        ...state,
        transactions: createTransctions(),
      };

    case ACTIONS.DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.map((transaction) => {
          transaction.transactionLists.filter((tl) => tl.id !== action.payload);
        }),
      };

    default:
      return state;
  }
};

export { ACTIONS, initialState, expenseReducer };
