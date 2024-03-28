import './ExpenseDate.css';
import React from 'react';
function ExpenseDate(props){

    const month = props.dateobj.toLocaleString('en-US',{month:'long'});
    const day = props.dateobj.toLocaleString('en-US',{day:'2-digit'});
    const year = props.dateobj.getFullYear();
    return (
     <div className="expense-date">
        <div className='expense-date__month'>{month}</div>
        <div className='expense-date__year'>{year}</div>
        <div className='expense-date__day'>{day}</div>
     </div>
    );
}

export default ExpenseDate;