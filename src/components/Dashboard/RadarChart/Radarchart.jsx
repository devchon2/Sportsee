import style from './Radarchart.module.css';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';


export default function RadarCharts({perfs}){

return (
  <ResponsiveContainer className={style.radarContainer} width="30%" height="100%">
    <RadarChart className={style.radarChart}  data={perfs}>
      <PolarGrid />
      <PolarAngleAxis dataKey='' />
      <PolarRadiusAxis />
    </RadarChart>
  </ResponsiveContainer>
);
}