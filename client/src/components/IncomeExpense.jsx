import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";
import "../components/IncomeExpense.css";
import { useState, useEffect } from "react";

const IncomeExpense = () => {
  const [income, updateIncome] = useState(0);
  const [expense, updateExpense] = useState(0);
  const { transactions } = useContext(GlobalContext);

  const calculation = () => {
    let inc = 0;
    let exp = 0;

    transactions.map((transaction) => {
      return transaction.list.map((item) => {
        item.type === "Income" ? (inc += item.amount) : (exp += item.amount);
        return item;
      });
    });

    updateIncome(inc);
    updateExpense(exp);
  };

  useEffect(() => calculation());

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">
          +${income}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">
          -${Math.abs(expense)}
        </p>
      </div>
    </div>
  );
};

export default IncomeExpense;
