import React from "react";
import Form from "./Form";
import History from "./History";
import IncomeExpense from "./IncomeExpense";

const Merge = () => {
  return (
    <div className="flex flex-col gap-20">
      <IncomeExpense/>
      <Form />
      <History />
    </div>
  );
};

export default Merge;
