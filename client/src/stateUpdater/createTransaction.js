import { transactionType } from "../components/Form";

export const createTransctions = (state, action) => {
  const workingTransctions = [...state.transactions];
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const transactionDate = new Date().getDate();
  const transactionDay = new Date().getDay();
  const { type, amount } = action.payload;
  const { income, expense, others } = transactionType;

  const findIndex = workingTransctions.findIndex(
    (t) => t.transactionDate === transactionDate
  );

  if (findIndex < 0) {
    if (type === expense || type === others) {
      alert("You have no income yet now! So, add income first then expense!!");
      return workingTransctions;
    } else {
      workingTransctions.push({
        transactionDate,
        transactionDay: weekday[transactionDay],
        transactionLists: [
          { ...action.payload, id: Math.floor(Math.random() * 100000) },
        ],
      });
    }
  } else {
    // transactionlists array
    const transactionListArr = workingTransctions[findIndex].transactionLists;

    if (type === expense) {
      // Find out total Income
      const totalIncome = transactionListArr.reduce((t, l) => {
        if (l.type === income) {
          return t + parseInt(l.amount);
        }
        return t;
      }, 0);

      const expenseIndex = transactionListArr.findIndex(
        (l) => l.type === expense
      );

      if (expenseIndex < 0) {
        const { amount } = action.payload;
        if (totalIncome < parseInt(amount)) {
          alert("You have not enough income for expense more");
          return workingTransctions;
        } else {
          transactionListArr.push({
            ...action.payload,
            id: Math.floor(Math.random() * 100000),
          });
        }
      } else {
        // Means have expense tranction in our list
        const totalExpense = transactionListArr.reduce((t, l) => {
          if (l.type === expense) {
            return t + parseInt(l.amount);
          }
          return t;
        }, 0);
        if (totalExpense + parseInt(amount) > totalIncome) {
          alert("You have not enough income for expense more");
          return workingTransctions;
        } else {
          transactionListArr.push({
            ...action.payload,
            id: Math.floor(Math.random() * 100000),
          });
        }
      }
    } else {
      transactionListArr.push({
        ...action.payload,
        id: Math.floor(Math.random() * 100000),
      });
    }
  }

  return workingTransctions;
};
