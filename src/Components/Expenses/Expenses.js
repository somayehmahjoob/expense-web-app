import { useState } from 'react';

import ExpensesList from './ExpensesList';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = (props) =>{
  const[filteredYear, setFilteredYear]=useState('2019');

  const filterChangeHandler = (selectedYear) => {
    console.log('Expenses');
    setFilteredYear(selectedYear);
  }
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear
  })
  
  return(
    <>
      <Card className='expenses'>        
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpensesList items={filteredExpenses} />     
      </Card>
    </>
  );
}
export default Expenses;