import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";
import "../components/IncomeExpense.css";
import { useState, useEffect } from "react";
import { useExpense } from "../context/expenseContext";

const IncomeExpense = () => {
  // const [income, updateIncome] = useState(0);
  // const [expense, updateExpense] = useState(0);
  // const { transactions } = useContext(GlobalContext);
  const { calculateTransactionAmount, getAvailableAmount } = useExpense();

  // const calculation = () => {
  //   let inc = 0;
  //   let exp = 0;
  //   transactions.map((transaction) =>
  //     transaction.type === "Income"
  //       ? (inc += transaction.amount)
  //       : (exp += transaction.amount)
  //   );

  //   updateIncome(inc);
  //   updateExpense(exp);
  // };

  // useEffect(() => calculation());

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">
          +${calculateTransactionAmount("Income")}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">
          -${calculateTransactionAmount("Expense")}
        </p>
      </div>
      <div>
        <h4>Available Amount</h4>
        <p id="money-minus" className="money plus">
          ${getAvailableAmount()}
        </p>
      </div>
    </div>
  );
};

export default IncomeExpense;
