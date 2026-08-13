import { useState, useEffect } from "react";
import "./App.css";

//  lets get cooking

function App() {
  const [transaction, setTransaction] = useState([]);
  useEffect(() => {
    console.log(transaction);
  }, [transaction]);

  function handleClick(e) {
    // console.dir(e.target);

    if (e.target.classList.contains("button-add")) {
      // fucnking forgot abvout hte query selector : document.querySelector("#income-expense-container").value

      setTransaction((prevState) => [
        ...prevState,
        {
          numberOfTransaction: document.querySelector(
            "#income-expense-container",
          ).value,
          amount: document.querySelector("#amount-container").value,
          modeOfTransaction: document.querySelector("#income-expense").value,
        },
      ]);
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
        <div onClick={handleClick} className="inputs-container">
          {/* inputs section starts here */}
          <div className="inputs">
            <input
              type="text"
              id="income-expense-container"
              placeholder="Income or Expense (like Salary)"
            />
            <input type="text" id="amount-container" placeholder="Amount..." />
            <select id="income-expense" name="income">
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
