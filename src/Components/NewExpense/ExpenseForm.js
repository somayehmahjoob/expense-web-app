import React, {useState} from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props)=> {
  // for solution 1
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  // for solution 2&3
  // const [userInput , setUserInput] = setState ({
  //   enteredTitle: '',
  //   enteredAmount:'',
  //   enteredDate:''
  // });

  const titleChangeHandler = (event) => {
    // solution 1
    setEnteredTitle(event.target.value);

    // solution 2
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value
    // })

    // solution 3
    // setUserInput((prevState)=> {
    //   return {...prevState, enteredTitle:event.target.value}
    // });
  }

  const amountChangeHandler = (event)=> {
    setEnteredAmount(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredAmount:event.target.value
    // })
  }

  const dateChangeHandler = (event)=> {
    setEnteredDate(event.target.value);
    
    // setUserInput({
    //   ...userInput,
    //   enteredDate:event.target.value
    // })
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate)
    }
    props.onSaveExpenseData(expenseData);

    setEnteredAmount('');
    setEnteredDate('');
    setEnteredTitle('');
  }
  return (
    <>
      <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
          <div className='new-expense__control'>
            <label>Title:</label>
            <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
          </div>
          <div className='new-expense__control'>
            <label>Amount:</label>
            <input type="Number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>
          </div>
          <div className='new-expense__control'>
            <label>Date:</label>
            <input type="date" min="2019-01-01" max="2022-12-30" value={enteredDate} onChange={dateChangeHandler}/>
          </div>          
        </div>
        <div className='new-expense__actions'>
          <button type='buttton' onClick={props.onClose} className="new-expense__cancel">Cancel</button>
          <button type='submit'>Add New</button>
        </div>
      </form>
    </>
  )
}
export default ExpenseForm;