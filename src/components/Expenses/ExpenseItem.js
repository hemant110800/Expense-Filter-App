import "./ExpenseItem.css";
import ExpenseDate from "../Expenses/ExpenseDate";
import Card from "../UI/Card";
// import $ from 'jquery';
import React, { useState } from 'react';

// function ExpenseItem({date,title,amount}) {  object destructing for props , if needed we can use directly date, title and amount
                                              // to work this callig time we should pass whole expense object.
    
function ExpenseItem(props) {

    const [title, setTitle] = useState(props.title);
    console.log("ExpenseCompnentCalled");

    // const TestClickHandler = () => {
    //     console.log("click");
    //     // $([2,3,4,5,6,7]).each(function(ind,dt){
    //     //     console.log(ind,dt);
    //     // })
    //     setTitle("Updated Title");
    //     // $(".expense-item__price").html("Hemant Testing");
    // };

    return (
        <li>
            <Card className="expense-item">
                {/* <div style={{color:"lightpink",fontWeight:"bolder"}}>{props.dt.toDateString()}</div> */}
                <ExpenseDate dateobj={props.dt} />
                <div className="expense-item__description">
                    <h2 id="CardItem">{title}</h2>
                    <div className="expense-item__price">${props.pr}</div>
                </div>
                {/* <button onClick={TestClickHandler}>Test BTn</button> */}
            </Card>
        </li>
    );
}

export default ExpenseItem;