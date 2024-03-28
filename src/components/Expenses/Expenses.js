import './Expenses.css';
import Card from '../UI/Card';
import React, { useState } from 'react';
import ExpenseFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpenseChart';

function Expenses(props) {

   const [filterYear, setfilterYear] = useState("2021");

   const selectedYearfromChild = (slctdYear) => {
      console.log(slctdYear);
      setfilterYear(slctdYear);
   }

   const filtered_expenseList = props.expenses.filter((item) => {
      return item.date.getFullYear().toString() === filterYear;
   })


   // let final_data = <p className='no_expense'>No expenes found!</p>;
   // if(filtered_expenseList.length > 0){
   //    final_data = (filtered_expenseList.map((expenses) => {
   //       return <ExpenseIt key={expenses.id} title={expenses.title} pr={expenses.amount} dt={expenses.date}></ExpenseIt>;
   //     }));
   // }

   return (
      <Card className='expenses'>
         <ExpenseFilter onSelectedYear={selectedYearfromChild} year_list={["2024", "2023", "2022", "2020"]} selected={filterYear} />
         <ExpenseChart expenses={filtered_expenseList} />
         <ExpenseList item={filtered_expenseList}></ExpenseList>
      </Card>
   );

}

export default Expenses;

// Conditoning Outputs
/* one way of Conditioning --> ternary operator
     {filtered_expenseList.length === 0 ?<p className='no_expense'>No expenes found!</p> :(filtered_expenseList.map((expenses) => {
       return <ExpenseIt key={expenses.id} title={expenses.title} pr={expenses.amount} dt={expenses.date}></ExpenseIt>;
     }))} */

/* second way of conditioning ---> && operator(if the first conditn correct then we perform second one)
 filtered_expenseList.length === 0 && <p className='no_expense'>No expenes found!</p>
 filtered_expenseList.length > 0 && (filtered_expenseList.map((expenses) => {
   return <ExpenseIt key={expenses.id} title={expenses.title} pr={expenses.amount} dt={expenses.date}></ExpenseIt>;
 })) */

/*third way of conditioning -- like we can declare variable outside return block and we can place html code outside
also and based on cndition we will alter data and directly the variable we can use in JSX
Used Third Conditioning in Code.*/



// -----------------------------------------------------------------------------------------------

/*We can directly call Compoemnt also without using map() 
<ExpenseIt title={props.expenses[0].title} pr={props.expenses[0].amount} dt={props.expenses[0].date}></ExpenseIt>
    <ExpenseIt title={props.expenses[1].title} pr={props.expenses[1].amount} dt={props.expenses[1].date}></ExpenseIt>
    <ExpenseIt title={props.expenses[2].title} pr={props.expenses[2].amount} dt={props.expenses[2].date}></ExpenseIt>
    <ExpenseIt title={props.expenses[3].title} pr={props.expenses[3].amount} dt={props.expenses[3].date}></ExpenseIt> */
