import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    console.log(typeof selectedYear);
    setFilteredYear(selectedYear);
  };

  const filterExpensesData = props.items.filter((item) => {
    console.log("dataCheck :>> ", typeof item.date.getFullYear());
    return String(item.date.getFullYear()) === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onChangeFilter={filterChangeHandler}
          selected={filteredYear}
        />
        {filterExpensesData.map((item) => {
          return (
            <ExpenseItem
              title={item.title}
              amount={item.amount}
              date={item.date}
              key={item.id}
            />
          );
        })}
      </Card>
    </div>
  );
};

export default Expenses;
