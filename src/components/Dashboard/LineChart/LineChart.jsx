import { LineChart, Line, XAxis, YAxis,  Tooltip, ResponsiveContainer } from 'recharts';
import style from './LineChart.module.css'

export default function LineChartComponent({ data }){
  console.log('data in linechart', data)
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
          dataKey="sessionLength"
          stroke="white"
          hide={true}
          tickSize={0}
          tickMargin={10}
          domain={[0, 'dataMax + 10']}
          />
        
        <Line
          dataKey="sessionLength"
          type='basis'
          stroke='white'
          
          dot={false}
          strokeWidth={2}
        />
        <Tooltip  />
      </LineChart>
</ResponsiveContainer>);

}