import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {

  return (
    <div className="expense-item">
      <ExpenseItem
        title={props.expenses[0].title}
        date={props.expenses[0].date}
        amount={props.expenses[0].amount}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenses[1].title}
        date={props.expenses[1].date}
        amount={props.expenses[1].amount}
      ></ExpenseItem>
    </div>
  );
}

export default Expenses;