import { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import moment from "moment";

// console.log(moment().format("Do MMMM, dddd."));

const Form = () => {
  const [text, setText] = useState("");
  const [type, setType] = useState("Income");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    let currentDate = moment().format("Do MMMM, dddd.");
    // console.log(currentDate)
    const newTransactions = {
      currentDate,
      list: [
        {
          id: Math.floor(Math.random() * 100000),
          text,
          type,
          amount: parseInt(amount),
        },
      ],
    };

    // console.log(newTransactions);
    addTransaction(newTransactions);
    setText("");
    setAmount(0);
  };

  return (
    <div className="form max-w-lg mx-auto w-full ">
      <h1 className="font-bold pb-4 text-xl">Transaction</h1>

      <form id="form" onSubmit={onSubmit}>
        <div className="grid gap-4">
          <div className="input-group">
            <input
              type="text"
              placeholder="Salary, House Rent, other-expense"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="form-input"
              // required={true}
            />
          </div>
          <select
            className="form-input"
            value={type}
            // checked={type === "Income" || "Expense"|| "Others"}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="Income" defaultValue>
              Income
            </option>
            <option value="Expense" defaultValue>
              Expense
            </option>
            <option value="Others" defaultValue>
              Others
            </option>
          </select>
          <div className="input-group">
            <input
              type="text"
              placeholder="Amount = $0"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="form-input"
              // required={true}
            />
          </div>
          <div className="submit-btn">
            <button className="border py-2 text-white bg-indigo-500 w-full">
              Add Transaction
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
