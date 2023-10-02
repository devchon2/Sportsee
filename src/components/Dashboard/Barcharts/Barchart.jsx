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
  Label,
} from "recharts";

 
const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
   return (
      <div className={style.tooltip}>
   {payload.map((payl) => {
    console.log('payl', payl)
      const { unit,value } = payl
      console.log('unit', unit)
      const FormatedUnit = unit === 'Kcal' ? 'Kcal' : 'Kg'
      return (
        <div className={style.tooltip}>
          <p className={style.label}>{`${value}${FormatedUnit}`}</p>
          <p className={style.intro}></p>
        </div>
      );
    })}
    </div>
  );
}
return null;
};



export default function BarchartContainer({ activities }) {

 
  



  return (
    <ResponsiveContainer className={style.barchartsContainer} width="100%" height="50%">
        <BarChart className={style.barchart} width='100%' height='100%' data={activities} barGap={5}  barSize={15}
        margin={{ top: 20,  bottom: 20 }} >

          <CartesianGrid horizontal={true} vertical={false} strokeDasharray={3} />
          <XAxis  dataKey='day' tickSize={0} tickMargin={10} />
          <YAxis  dataKey='kilogram' hide={false} yAxisId='kg' orientation='right'  domain={['datamin + 1', 'dataMax +1']} />
          <YAxis  dataKey='calories' hide={true}   id='cal' domain={[60, 'auto']} />
<Tooltip content={<CustomTooltip />} />
            <Legend iconSize={8} iconType='circle' verticalAlign='top' align='right' margin={{top:10,right:0,bottom:10,left:0}} />
          <Bar name='Poids (kg)'  dataKey="kilogram"  radius={[20, 20, 0, 0]} maxBarSize={10} fill="black" id='kg' unit='kg' margin={{top:10}} />
          <Bar name='Calories brulées (Kcal)' dataKey="calories" fill="red" id='cal' unit='Kcal'  radius={[20, 20, 0, 0]} maxBarSize={10}  />
        </BarChart>
      </ResponsiveContainer>
  );
}
