// import ExpenseIt from "./components/ExpenseItem";
import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const DUMMY_Expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2022, 7, 14)
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2024, 2, 25)
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2024, 1, 12)
    },
    {
      id: "e5",
      title: "Bath Soap",
      amount: 5.67,
      date: new Date(2023, 3, 26)
    },
    {
      id: "e6",
      title: "Wooden Bed",
      amount: 250,
      date: new Date(2023, 5, 12)
    }
  ];

  const [expenses, setExpenses] = useState(DUMMY_Expenses);

  const AddingExpenseHandler = SavedExpenseObj => {
    console.log(SavedExpenseObj);
    setExpenses(prevExpenses => [SavedExpenseObj, ...prevExpenses]);
  };

  // const YearFilterHandler = (filter_year) => {
  //   console.log(filter_year,whole_expenses);

  //   const chkValidity = (exp) => {
  //     console.log(exp.date.getFullYear());
  //         return (exp.date.getFullYear() == filter_year);
  //   }
  //   const filteredExpensesList = whole_expenses.filter(chkValidity);

  //   console.log(filteredExpensesList);

  //   setExpenses(filteredExpensesList);

  // }

  return (
    <div>
      <NewExpense onAddExpense={AddingExpenseHandler}></NewExpense>
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;
