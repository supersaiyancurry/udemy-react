import "./ExpenseDate.css";

function ExpenseDate(props) {
    const month = props.date.toLocaleString("en-US", { month: "long" });
    const day = props.date.toLocaleString("en-US", { month: "2-digit" });
    const year = props.date.getFullYear();
  
    return (
      <div className="expense-date">
        <div>
          <div className="expense-date__month">{month}</div>
          <div className="expense-date__year">{year}</div>
          <div className="expense-date__day">{day}</div>
        </div>
        {/* <div className="expense-item_description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div> */}
      </div>
    );
  }

  export default ExpenseDate;