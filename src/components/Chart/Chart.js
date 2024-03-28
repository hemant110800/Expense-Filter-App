import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (props) => {

    const valueArray = props.dataPoints.map((data)=>{return data.value;})
    const MaxV = Math.max(...valueArray);

    return (
        <div className='chart'>
            {props.dataPoints.map((datapoint) => {
                return <ChartBar value={datapoint.value} label={datapoint.label} key={datapoint.label} maxValue={MaxV} />
            })}
        </div>
    )

}

export default Chart;