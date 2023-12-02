import React from "react";
import { useExpense } from "../context/expenseContext";

function TransactionItem({ transaction: { transactionLists } }) {
  const { handleDeleteTransaction } = useExpense();
  return (
    <div>
      {transactionLists.map((tl) => (
        <div className="flex gap-2">
          <p> {tl.type} </p>
          <p> {tl.amount} </p>
          <button onClick={() => handleDeleteTransaction(tl.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default TransactionItem;
