import React from 'react';
import './ExpenseFilter.css';

const ExpenseFilter = (props) => {

    const yearHandler = (event)=>{
    console.log(event.target.value);
    props.onSelectedYear(event.target.value);
    }
    
    return (
        <div className="expenses-filter">
           <div className='expenses-filter__control'>
            <label>Filter by year</label>
            <select value={props.selected} onChange={yearHandler}>
               { props.year_list.map((year,ind) =>{
                   return <option key={ind} value={year}>{year}</option>
                })}
            </select>
           </div>
        </div>
    )
}

export default ExpenseFilter;