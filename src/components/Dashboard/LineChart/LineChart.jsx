import { LineChart, Line, XAxis, YAxis,  Tooltip, ResponsiveContainer } from 'recharts';
import style from './LineChart.module.css'

export default function LineChartComponent({ data }){
  return (
  <ResponsiveContainer className={style.linechartComponent } width='30%' height='100%'>
  <LineChart
        data={data}
        width='100%'
        height='100%'
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      >
        <XAxis
          type="category"
          dataKey="day"
          stroke="white"
          tickSize={0}
          tickMargin={10}
          tickLine={false}
        />

        <YAxis
          type="number"
          
          stroke="white"
          hide='true'
          />
        
        <Line
          dataKey="sessionLength"
          type='monotone'
          stroke='white'
          fill='white'
          dot={false}
          strokeWidth={2}
        />
        <Tooltip />
      </LineChart>
</ResponsiveContainer>);

}