import { LineChart, Line, XAxis, YAxis,  Tooltip, ResponsiveContainer } from 'recharts';
import style from './LineChart.module.css'



  const CustomTooltip = ({ active, payload, }) => {
    if (active && payload && payload.length) {
      console.log('payload', payload)
   return (
      <div className={style.tooltip}>
   {payload.map((payl) => {
    console.log('payl', payl)
      const { unit,value } = payl
      console.log('unit', unit)
      return (
        <div className={style.tooltip}>
          <p className={style.label}>{`${value}min`}</p>
        </div>
      );
    })}
    </div>
  );
}
return null;
};


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
          xAxisId='day'
          tickSize={7}
          tickMargin={10}
          tickLine={false}
        />

        <YAxis
          type="number"
          dataKey="sessionLength"
          stroke="white"
          hide={true}
          yAxisId='sessionLength'
          tickSize={0}
          domain={['dataMin-15', 'dataMax + 5']}
          />
        
        <Line className={style.line}
          dataKey="sessionLength"
          type="natural"
          stroke='white'
          fill='linear-gradient(90deg, rgba(255,0,0,0.5830707282913166) 0%, rgba(255,255,255,1) 100%, rgba(255,0,0,1) 100%, rgba(255,0,0,1) 100%)'  
          dot={false}
          yAxisId='sessionLength'
          xAxisId='day'
          strokeWidth={2}
          domain={['dataMin - 5 ', 'dataMax + 5']}
        />
        <Tooltip content={<CustomTooltip />} />
      </LineChart>
</ResponsiveContainer>);

}