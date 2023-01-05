import { useContext } from "react";
import DataSets from "../components/data.json";
import { GlobalContext } from "../context/GlobalState";
import "../components/Graph.css";
import logo from "../Logo/logo.svg";
import React from "react";
import moment from "moment";

const Graph = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div className="flex flex-col items-center justify-center gap-5 p-8">
      <div className="flex justify-between text-white w-[540px] items-center py-8 px-8 h-[125px] bg-[#5a75a1] rounded-xl ">
        <div className="balanceText">
          <h4 className="text-lg text-left mb-2">My balance</h4>
          <h3 className="text-4xl text-[#fffbf6]">${total}</h3>
        </div>
        <img className="w-[60px] h-[40px]" src={logo} alt="bank logo" />
      </div>
      <main className="w-[540px] px-8 py-10 bg-[#fffbf6] rounded-xl">
        <h2 className="text-[#382314] text-left text-3xl mb-8">
          Spending - Last 7 days
        </h2>
        <div className="flex h-[400px] w-full stick">
          <div className="flex gap-3.5 items-end mb-2">
            {DataSets.map((data) => (
              <>
                <li key={data.id} className="flex flex-col-reverse">
                  <p className="dayText">{data.day}</p>
                  <div
                    className={`chart_bar ${
                      moment().format("ddd") === data.day
                        ? "currentDay"
                        : "defaultDay"
                    }`}
                    style={{ height: `${data.amount}` * 3 + "px" }}
                  ></div>
                  <p className="amountText">${data.amount}</p>
                </li>
              </>
            ))}
          </div>
        </div>
        <div className="w-[100%] flex flex-col">
          <p className=" mb-6 pt-4 text-lg text-[#92857a] border-t-2 border-[#a8a8a8]">
            Total this month
          </p>
          <div className="flex justify-between">
            <h5 className="totalAmount text-5xl font-semibold">${total}</h5>
            <div className="flex flex-col items-end">
              <p className=" text-lg text-[#382314]">+2.4%</p>
              <p className=" text-lg text-[#92857a]">from last month</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Graph;
