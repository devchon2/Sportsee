import style from './Radialchart.module.css';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';


export default function RadialChartComponent({data}){
  console.log('radialData',data)
  return (
    <ResponsiveContainer className={style.radialChartContainer} aspect={{30:30}} width="30%" height="100%">
      <RadialBarChart className={style.radialChart} innerRadius={90} outerRadius={100}  barSize={10} data={data} startAngle={0} endAngle={180}>
        <RadialBar className={style.radialBar} label={{ position: 'insideStart', fill: 'red' } }
          background='red'
          clockWise ={true}
          dataKey='value'
        />
        
        <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
      </RadialBarChart>
    </ResponsiveContainer>
  );
}