import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Transaction } from "./Transaction";
import "../components/History.css";
import moment from "moment";

// console.log(moment().format("Do MMMM, dddd."));

const History = () => {
  const { transactions } = useContext(GlobalContext);
  
  // let e = moment().day()
  const d = new Date().getDay();
  // console.log(d)

  transactions.map((transaction) => {
    if (transaction.currentDate === d) {
      console.log(transaction.currentDate)
      console.log("hey");
    } else {
      console.log("fkkoff");
    }
  });


  return (
    <div className="first-div">
      <h3 className="text-black text-2xl font-bold mb-4">HISTORY</h3>
      <button className="p-2 bg-indigo-500 text-white">
        Show Previous Records
      </button>
      <div>
        <ul id="list" className="list">
          <h3 className="text-start border-b-4 border-b-slate-400 pt-3 text-black text-xl font-bold">
            {moment().format("Do MMMM  YYYY, dddd.")}
          </h3>
          {transactions.map((transaction) => (
            <Transaction key={transaction.id} transaction={transaction} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default History;
