import { useState, useEffect } from "react";
import "./App.css";

//  lets get cooking

function App() {
  const [transaction, setTransaction] = useState({
    typeOfTransaction: "",
    amount: "",
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
        amount: e.target.value,
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
    console.log(e.target.value);

    if (e.target.value) {
      setTransaction((prev) => {
        return {
          ...prev,
          modeOfTransaction: e.target.value,
        };
      });
    }
  }

  function handleClick(e) {
    if (e.target.classList.contains("button-add")) {
      if (document.querySelector("#income-expense").value !== "") {
        setTransactions((prev) => {
          return [...prev, transaction];
        });
      }
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
          {/* markup section starts here */}
          <div className="transaction-ui-container">
            <div className="expense-date-container">
              <div className="expense-id">Salary</div>
              <div className="date-id">Tue Jul 2023</div>
            </div>
            <div className="amount-id">+$ 5000.00</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
