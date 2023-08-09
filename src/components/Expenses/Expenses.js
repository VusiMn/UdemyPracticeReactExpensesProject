import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart.js";
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  // filter generates a new array it doesnt manipulate the old array, kept outside as a global variable as filtered handler state change the component re renders
  const filteredExpenses = props.items.filter(expense => {
     return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onFilterChangeHandler={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
       <ExpensesList items={filteredExpenses}/>
      </Card>
    </li>
  );
}

export default Expenses;
