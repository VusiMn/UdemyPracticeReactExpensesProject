import React, {useState} from 'react';
import './ExpenseItem.css'; // ensure this file uses it dedicated css now can reference css classNames to style the html commpnents
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
function ExpenseItem(props){
 //first element is the pointer to value second element is function invoke to update state value. When setTitle is invoked component get re rendered
 //useState always returns an array with two elements always the case 
    const [title, setTitle] = useState(props.title); // the initial value of the title is the default prop
   
    //the Handler suffix naming convention prompt developers that the function is not executed explicitly but rather it listens to event to handle

    const clickHandler = () => {
        setTitle('Updtated!') // calling the function assigns new value to title and also triggers react to rerender its UI
        //Only the component that houses/ were the state was registered/useState will rerender with the state changed
        console.log('Clicked!!!');
    };

// title is used below.
    return (
    <Card className='expense-item'>
       <ExpenseDate date={props.date}/>
        <div className="expense-item__description">
            <h2>{title}</h2> 
            <div className="expense-item__price">{props.amount}</div>
        </div> {/** Notice you dont invoke clickHandler() because want to achieve lazy evaluation**/}
        <button onClick={clickHandler}>change title</button>
    </Card>)
}

export default ExpenseItem;