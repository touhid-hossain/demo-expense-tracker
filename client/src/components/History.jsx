import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Transaction } from "./Transaction";
import "../components/History.css";
// import moment from "moment";

// console.log(moment().format("Do MMMM, dddd."));

const History = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <div className="first-div">
      <h3 className="text-black text-2xl font-bold mb-4">HISTORY</h3>
      <button className="p-2 bg-indigo-500 text-white">
        Show Previous Records
      </button>
      <div>
        <ul id="list" className="list">
          {transactions.length === 0 ? (
            <h3 className="text-start border-b-4 border-b-slate-400 pt-3 text-black text-xl font-bold">
              Data na thakle amar dhon dekhamu
            </h3>
          ) : (
            transactions.map((transaction) => { 
              return (
                <>
                  <h3 className="text-start border-b-4 border-b-slate-400 pt-3 text-black text-xl font-bold">
                    {transaction.date}
                  </h3>
                  {transaction.list.map((item) => {
                    return <Transaction key={item.id} transaction={item} />;
                  })}
                </>
              );
            })
          )}
        </ul>
      </div>
    </div>
  );
};

export default History;
