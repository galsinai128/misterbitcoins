import React,  { Component }  from 'react';
import './Chart.css';
import { Sparklines , SparklinesLine} from 'react-sparklines';

const Chart = ({ chartData }) => {
  if (!chartData) return <div>Loading...</div>

  const data = chartData.values.map(value => value.y);
return (
    <div className="chart flex flex-col justify-center align-center">
      <h3>
        {chartData.name}
      </h3>
      <Sparklines data={data} width={100} height={40} margin={5}>
        <SparklinesLine color="purple" />
      </Sparklines>
      <div>
        {chartData.description}
      </div>
    
    </div>
  )
};
   
  export default Chart;
