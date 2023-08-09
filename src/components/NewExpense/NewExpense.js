import React, { useState } from "react";
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'; 
export default function NewExpense(props){
    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = { // copy expense object then add id key
            ...enteredExpenseData,
            id: Math.random().toString()
        }

       // console.log(expenseData);
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    };

    const stopEditingHandler = () => {
        setIsEditing(false);
      };

    return(
        <div className='new-expense'>
            {/** 
             * saveExpenseDataHandler is now a pointer to the parent function passed down to the child component ExpenseForm 
             * which will enable the child to propagate form input expense data up to be rendered again the function is not executed it reference address
             * this pattern is called lift up state
             * 
             * not the condition followed by && then component this means if condition is true then render the component else dont
             */}
             {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button> } 
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />}
        </div>
    )

}