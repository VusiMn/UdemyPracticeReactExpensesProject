import React, { useState } from "react";

import "./ExpenseForm.css";

export default function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState();
  const [enteredDate, setEnteredDate] = useState("");

  /***
   * Instead setting multiple states can have one state for all the fields
   *
   * const [userInput, setUserIput] = useState({
   *   eteredTitle: '',
   *   enteredAmount: '',
   *   enteredDate: '',
   * })
   */

  /**
   *  prevState is the snapshot of previous state do this if all fields are handled by one state
   * below we only override one state which is enteredTitle all other field remain the same as previous state hence ...prevState
   * setUserInput( (prevState) => {
   *  return {...prevState, enteredTitle: event.target.value }
   * })
   */

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };


  const submitHandler = (event) => {
    event.preventDefault(); // avoid page reloading
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    //console.log(expenseData);
    props.onSaveExpenseData(expenseData); //execute the reference function from parent componet <NewExpense>
    //clear the values
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };


    return (
      /**
       * if a button in a form is pressed as submitt the overral form issubmitted so the is a onSubmitt listener execute some function
       */

      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            {/** supplying value = {enteredAmopunt}  we are doing a two way binding where input value is persisted as we change the state the value field reflect most latest state**/}
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={enteredAmount}
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              value={enteredDate}
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button
            onClick={props.onCancel}
          >
            {" "}
            cancel{" "}
          </button>
          <button type="submit"> Add Expense </button>
        </div>
      </form>
    );

}
