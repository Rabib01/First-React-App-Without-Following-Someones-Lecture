import { useState, useEffect } from "react";
import "./App.css";

//  lets get cooking

function App() {
  const [transaction, setTransaction] = useState({
    typeOfTransaction: "",
    amount: 0,
    modeOfTransaction: "",
  });
  const [transactions, setTransactions] = useState([]);

  // useEffect(() => {
  //   console.log(transaction);
  // }, [transaction]);

  useEffect(() => {
    console.log(transactions);
  }, [transactions]);

  function handleAmountChange(e) {
    // This makes more fucking sense to me than using the first parenthesis notation
    setTransaction((prev) => {
      return {
        ...prev,
        amount: +e.target.value,
      };
    });

    // function ends here
  }

  function handleTypeOfTransaction(e) {
    // console.log(e.target.value);
    setTransaction((prev) => {
      return {
        ...prev,
        typeOfTransaction: e.target.value,
      };
    });
  }

  function handleModeOfTransaction(e) {
    // console.log(e.target.value);
    if (e.target.value) {
      setTransaction((prev) => {
        return {
          ...prev,
          modeOfTransaction: e.target.value,
        };
      });
    }
  }

  function addItemsToUI(uiTransactionItems) {
    // for learning purposes not implementing a component for the very first
    return uiTransactionItems.map((item) => {
      return (
        <div className="transaction-ui-items">
          <div className="expense-date-container">
            <div className="expense-id">{item.typeOfTransaction}</div>
            <div className="date-id">{item.date}</div>
          </div>
          <div className="amount-id">
            {item.modeOfTransaction === "income"
              ? `+$${item.amount}`
              : `-$${item.amount}`}
          </div>
        </div>
      );
    });
  }

  /** 
<div className="transaction-ui-items">
            <div className="expense-date-container">
              <div className="expense-id">Salary</div>
              <div className="date-id">Thu Aug 13 2026</div>
            </div>
            <div className="amount-id">+$ 5000.00</div>
          </div>
*/

  function handleClick(e) {
    const options = {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    };

    if (
      e.target.classList.contains("button-add") &&
      transaction.modeOfTransaction !== ""
    ) {
      setTransactions((prev) => {
        return [
          ...prev,
          {
            ...transaction,
            date: new Intl.DateTimeFormat("en-US", options).format(
              new Date(Date.now()),
            ),
          },
        ];
      });
    }
  }

  return (
    <>
      <div className="parent-container">
        <div className="amount-container">
          <h1>
            <span>+</span> 5000
          </h1>
        </div>
        {/* inputs section starts  here */}
        <div onClick={handleClick} className="inputs-container">
          <div className="inputs">
            <input
              type="text"
              // {/* inputs section for typeOfTransaction */}
              id="income-expense-container"
              onChange={handleTypeOfTransaction}
              placeholder="Income or Expense (like Salary)"
            />
            {/* inputs section for amount of transaction here */}
            <input
              type="text"
              id="amount-container"
              onChange={handleAmountChange}
              placeholder="Amount..."
            />
            {/* select option */}
            <select
              onChange={handleModeOfTransaction}
              id="income-expense"
              name="income"
            >
              <option value=""></option>
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
            <button className="button-add">+</button>
          </div>
        </div>
        {/* markup section starts here */}{" "}
        {/* This is the part of Ui that I need to change withing each iteration of the transactions state */}
        <div className="transaction-ui-container">
          <div className="transaction-ui-items">
            <div className="expense-date-container">
              <div className="expense-id">Salary</div>
              <div className="date-id">Thu Aug 13 2026</div>
            </div>
            <div className="amount-id">+$ 5000.00</div>
          </div>
          {addItemsToUI(transactions)}
        </div>
        {/* This div ends here */}
      </div>
    </>
  );
}

export default App;
