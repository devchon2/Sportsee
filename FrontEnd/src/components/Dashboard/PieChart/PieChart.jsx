import { PieChart, ResponsiveContainer, Pie, Label , Legend} from "recharts";
import style from './PieChart.module.css';

export default function PieChartComponent({ data }) {
console.log(data);
if (data){

const angle = -180 - data[0].value * 3.6 ;
return (
  <ResponsiveContainer className={style.respContainer} width='30%' height='100%'  >
    
    <PieChart className={style.pieChart} width='100%' height='"100%'>
    
      <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} innerRadius={90} cornerRadius={10} startAngle={-180} endAngle={angle} fill="red"  />
     
     <Pie data={data} fill="white" outerRadius={89} innerRadius={0}>
     <Label value={`${data[0].value}% de votre objectif`} position="center" width='80%' enableBackground  />
    </Pie>     
    <Legend className={style.legend} nameKey="name" align="left" verticalAlign="top" iconSize={0} fill="black"/>

    </PieChart>
    </ResponsiveContainer>
)
}}