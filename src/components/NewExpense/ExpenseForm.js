import './ExpenseForm.css';
import React, { useState } from 'react';

function ExpenseForm(props) {

    // const [newtitle, setNewTitle] = useState("");
    // const [newAmount, setNewAmount] = useState("");
    // const [newDate, setNewDate] = useState("");

    const [userInfo,setUserInfo] = useState({
        newtitle:"",
        newAmount:"",
        newDate:""
    })

    const titleChangeHandler = (event) => {
        // console.log(event.target.value);
        // setNewTitle(event.target.value);
        // setUserInfo({
        //     ...userInfo,
        //     newtitle:event.target.value
        // })may give incorrect result because it will schedule state update 

        // When one state depends upon previos state
        setUserInfo((prevState)=>{
           return {...prevState , newtitle:event.target.value};
        })
        //It ensures with latest values in State.
    }
    const AmountChangeHandler = (event) => {
        // console.log(event.target.value);
        // setNewAmount(event.target.value);
        setUserInfo((prevState)=>{
            return {...prevState , newAmount:event.target.value};
         })
    }
    const DateChangeHandler = (event) => {
        // console.log(event.target.value);
        // setNewDate(event.target.value);
        setUserInfo((prevState)=>{
            return {...prevState , newDate:event.target.value};
         })
    }

    const SubmitformHandler = (event)=>{
       event.preventDefault();
       const expense_obj = {
        title:userInfo.newtitle,
        amount:+userInfo.newAmount,
        date:new Date(userInfo.newDate)
       }
       console.log(expense_obj);

       //reseting empty values to field on form submission 
       setUserInfo((prevState)=>{
        return {...prevState,newtitle:"",newAmount:"",newDate:""};
       })

       props.onSaveExpenseData(expense_obj);

    //    Calling parent Component function through props by passing data 

    }

    const cancelform = ()=>{
        console.log("Expense form -- Cancel clicked");
        props.onCancel("press");
    }

    return (
        <form onSubmit={SubmitformHandler}>
            <div className="new-expense__controls">
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" id="Title_val" onChange={titleChangeHandler} value={userInfo.newtitle}></input>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={AmountChangeHandler} value={userInfo.newAmount}></input>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date"  onChange={DateChangeHandler} value={userInfo.newDate}></input>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='button' onClick={cancelform}>Cancel</button>
                <button type="submit">Add Expense</button> 
                {/* Submit type btn in form , onclick submits the form and screen reloads because it pass data */}
            </div>
        </form>
    );
}

export default ExpenseForm;


// $(document).on("change","#Titlefld",function(){
//     console.log($(this).val());
// })