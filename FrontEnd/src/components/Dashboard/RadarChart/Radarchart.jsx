import style from './Radarchart.module.css';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis,  ResponsiveContainer } from 'recharts';


export default function RadarCharts({data}){

  

return (
  <ResponsiveContainer className={style.radarContainer} width="30%" height="100%" aspect={1}    >
    <RadarChart className={style.radarChart} cx="50%" cy="50%"  data={data} outerRadius='70%' width='70%'  >
      <PolarGrid className={style.axis} gridType="polygon" radialLines={false} />
      <PolarAngleAxis  dataKey='kind' domain={['datamin', 'datamax']} tickLine={false}  tickSize={10}  />
      <Radar  dataKey='data' fill="red" dot={false} fillOpacity={0.7}  />
    </RadarChart>
  </ResponsiveContainer>
);
}