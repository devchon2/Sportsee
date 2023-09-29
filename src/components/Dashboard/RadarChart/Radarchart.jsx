import style from './Radarchart.module.css';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';


export default function RadarCharts({data}){

  
console.log(data)

return (
  <ResponsiveContainer className={style.radarContainer} width="30%" height="100%"  >
    <RadarChart className={style.radarChart} cx="50%" cy="50%" outerRadius="80%" data={data} background='black'>
      <PolarGrid gridType="polygon" radialLines={false}/>
      <PolarAngleAxis dataKey='kind' />
      <PolarRadiusAxis angle={30} domain={['dataMin', 'dataMax']} tick={false} />
      <Radar stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
    </RadarChart>
  </ResponsiveContainer>
);
}