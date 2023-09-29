import style from './Barchart.module.css'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

export default function BarchartContainer({ activities }) {




  return (
    <ResponsiveContainer className={style.barchartsContainer} width="100%" height="50%">
        <BarChart className={style.barchart} width='100%' height='100%' data={activities} barGap={5}  barSize={15}
        margin={{ top: 20,  bottom: 20 }} >

          <CartesianGrid horizontal={true} vertical={false} strokeDasharray={3} />
          <XAxis  dataKey='day' tickSize={0} tickMargin={10} />
          <YAxis  dataKey='kilogram' hide={false} yAxisId='kg' orientation='right' domain={[60, 'dataMax +10']} />
          <YAxis  dataKey='calories' hide={true}   id='cal' domain={[60, 'auto']} />
          <Tooltip fill='red' />
          <Legend iconSize={8} iconType='circle' verticalAlign='top' align='right' margin={{top:10,right:0,bottom:10,left:0}} />
          <Bar name='Poids (kg)'  dataKey="kilogram"  radius={[20, 20, 0, 0]} maxBarSize={10} fill="black" id='kg' unit='kg' margin={{top:10}} />
          <Bar name='Calories brulées (Kcal)' dataKey="calories" fill="red" id='cal' unit='Kcal'  radius={[20, 20, 0, 0]} maxBarSize={10}  />
        </BarChart>
      </ResponsiveContainer>
  );
}
