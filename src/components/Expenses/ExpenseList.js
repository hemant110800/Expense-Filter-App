import './ExpenseList.css';
import ExpenseIt from './ExpenseItem';

const ExpenseItem = (props) => {

    if (props.item.length === 0) {
        return <h2 className='no_expense'>Found No Expenses!</h2>;
    }
    else {
        return (
            <ul className='expenses-list'>
                {props.item.map((expenses) => {
                    // return <ExpenseIt key={expenses.id} expense_obj={expenses}></ExpenseIt> // we can pass whole obj also
                    return <ExpenseIt key={expenses.id} title={expenses.title} pr={expenses.amount} dt={expenses.date}></ExpenseIt>;
                })}
            </ul>
        )
    }
}

export default ExpenseItem;
