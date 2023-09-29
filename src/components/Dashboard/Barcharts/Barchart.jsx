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
        <BarChart className={style.barchart} width='100%' height='100%' data={activities} 
        margin={{ top: 5, right: 5, left: 5, bottom: 5 }} >
          <CartesianGrid horizontal={true} />
          <XAxis dataKey='index' />
          <YAxis />
          <Tooltip />
          <Legend iconType='circle' />
          <Bar dataKey="kilogram" fill="black" />
          <Bar dataKey="calories" fill="red" />
        </BarChart>
      </ResponsiveContainer>
  );
}
