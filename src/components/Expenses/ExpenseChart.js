import Chart from "../Chart/Chart";

const ExpenseChart = (props)=>{

let dataPoints=[
    {value:0,label:"Jan"},
    {value:0,label:"Feb"},
    {value:0,label:"Mar"},
    {value:0,label:"Apr"},
    {value:0,label:"May"},
    {value:0,label:"Jun"},
    {value:0,label:"Jul"},
    {value:0,label:"Aug"},
    {value:0,label:"Sep"},
    {value:0,label:"Oct"},
    {value:0,label:"Nov"},
    {value:0,label:"Dec"},
];

for(const expense of props.expenses){
    const mnth = expense.date.getMonth(); 
    dataPoints[mnth].value += expense.amount;
}
return (
    <Chart dataPoints = {dataPoints}></Chart>
)

}

export default ExpenseChart;