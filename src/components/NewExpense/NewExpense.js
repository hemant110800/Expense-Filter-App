import Card from "../UI/Card";
import ExpenseForm from "./ExpenseForm";
import React, { useState } from "react";
import './NewExpense.css';

function NewExpense(props){


  const CancelHandler = (val)=>{
    console.log("cancel -- newExpense",val);
    setnewExpense(<button className="text-center" onClick={NewExpenseAddHandler}>Add New Expense</button>);
  }

    const SaveExpenseDataHandler = (expenseDataRecieved)=>{
        //   console.log(expenseDataRecieved);
          const new_expenseObj ={
            ...expenseDataRecieved,
            id:Math.random().toString()
          };
          console.log(new_expenseObj);
          props.onAddExpense(new_expenseObj);

          setnewExpense(<button className="text-center" onClick={NewExpenseAddHandler}>Add New Expense</button>);
    }
    
    const NewExpenseAddHandler = ()=>{
      setnewExpense(<ExpenseForm onSaveExpenseData = {SaveExpenseDataHandler} onCancel={CancelHandler} />);
    }

    const [newExpenseAdd,setnewExpense] = useState(<button className="text-center" onClick={NewExpenseAddHandler}>Add New Expense</button>);

    // let newExpenseAdd = <button className="text-center" onClick={NewExpenseAddHandler}>Add New Expense</button>;
    return (
        <Card className = "new-expense">
        {newExpenseAdd};

        {/* <ExpenseForm onSaveExpenseData = {SaveExpenseDataHandler} />   */}
        {/* onSaveExpenseData we are using as a prop for passing data from children to parent in child 
        component we will call parent defined function by passing data as parameter */}
        
         </Card>
    );

}

export default NewExpense;