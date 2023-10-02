import style from './Radarchart.module.css';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';


export default function RadarCharts({data}){

  

return (
  <ResponsiveContainer className={style.radarContainer}    >
    <RadarChart className={style.radarChart} cx="50%" cy="50%"  data={data}   >
      <PolarGrid gridType="polygon" radialLines={false}/>
      <PolarAngleAxis dataKey='kind' domain={['datamin', 'datamax']} />
      <PolarRadiusAxis angle={30}  tick={false} />
      <Radar stroke="#8884d8" dataKey='data' fill="red"  fillOpacity={0.6}  />
    </RadarChart>
  </ResponsiveContainer>
);
}