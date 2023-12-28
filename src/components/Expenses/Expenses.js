import React from "react";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
  const filterExpensesDataHandler = (filteredExpenseData) => {
    props.onFilterExpense(filteredExpenseData);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter onFilterExpenseData={filterExpensesDataHandler} />
      {props.items.map((item) => {
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
  );
};

export default Expenses;
