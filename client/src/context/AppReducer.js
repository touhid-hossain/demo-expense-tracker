const AppReducer = (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      console.log(action.payload);
      return {
        ...state,
        list: state.list.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };

    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    default:
      return state;
  }
};

export default AppReducer;
