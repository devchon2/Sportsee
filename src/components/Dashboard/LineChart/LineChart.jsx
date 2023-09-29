import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';


export default function LineChartComponent({ averageSessions }){
  return (
  <ResponsiveContainer width='30%' height='100%'>
  <LineChart width={300} height={300} data={averageSessions} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    <Line type="monotone" dataKey="sessionLength" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey='day' />
    <YAxis />
    <Tooltip />
  </LineChart>
</ResponsiveContainer>);

}