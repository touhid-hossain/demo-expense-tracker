import { useContext } from "react";
import "../components/History.css";
import { useExpense } from "../context/expenseContext";
import TransactionItem from "./TransactionItem";

const History = () => {
  const { transactions } = useExpense();

  return (
    <div className="first-div">
      <h3 className="text-black text-2xl font-bold mb-4">HISTORY</h3>
      <button className="p-2 bg-indigo-500 text-white">
        Show Previous Records
      </button>
      <div>
        {/* <ul id="list" className="list">
          <h3 className="text-start border-b-4 border-b-slate-400 pt-3 text-black text-xl font-bold"></h3>
        </ul> */}
        <div>
          {transactions.map((transaction) => (
            <TransactionItem transaction={transaction} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default History;
