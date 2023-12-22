import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  return (
    <div className="expenses">
      {props.items.map((element) => {
        return (
          <ExpenseItem
            title={element.title}
            amount={element.amount}
            date={element.date}
          />
        );
      })}
    </div>
  );
}

export default Expenses;
