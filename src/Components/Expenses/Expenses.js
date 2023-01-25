import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
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
  let expenesContent = <p>Content not Found!</p>;

  if (filteredExpenses.length > 0 )
    {
      expenesContent =filteredExpenses.map(expense => 
        <ExpenseItem 
          key={expense.id}
          title={expense.title} 
          amount={expense.amount} 
          date={expense.date} 
        />
    )} 
  return(
    <>
      <Card className='expenses'>        
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {expenesContent}     
      </Card>
    </>
  );
}
export default Expenses;