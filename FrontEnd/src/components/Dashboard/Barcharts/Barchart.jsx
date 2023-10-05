import style from "./Barchart.module.css";
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

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className={style.tooltip}>
        {payload.map((payl) => {
          const { unit, value } = payl;
          const FormatedUnit = unit === "Kcal" ? "Kcal" : "Kg";
          return (
            <div className={style.tooltip} key={Math.random()}>
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

const CustomLegend = ({ payload }) => {
  return (
    <div className={style.legend}>
      {payload.map((item) => {
        return (
          <div key={Math.random()} className={style.legendItem}>
            <div className={style.legendIcon}>
              <svg width="10" height="10">
                <circle cx="5" cy="5" r="5" fill={item.color} />
              </svg>
            </div>
            <p className={style.legendText}>{item.value}</p>
          </div>
        );
      })}
    </div>
  );
};

export default function BarchartContainer({ activities }) {
  return (
    <ResponsiveContainer
      className={style.barchartsContainer}
      width="100%"
      height="50%"
    >
      <BarChart
        className={style.barchart}
        width="100%"
        height="100%"
        data={activities}
        barGap={2}
        barSize={10}
        margin={{ top: 20, bottom: 20, left: 20, right: 20 }}
        
      >
        <CartesianGrid horizontal={true} vertical={false} strokeDasharray={3} />
        <XAxis dataKey="day" tickSize={0} tickMargin={10}  />
        <YAxis
          dataKey="kilogram"
          hide={false}
          yAxisId="kg"
          orientation="right"
          domain={['dataMin - 1','dataMax + 1']}
          tickLine={false}
          tickCount={5}
          includeHidden={true}
          
        />
        <YAxis dataKey="calories" hide={true} id="cal" tickCount={5} yAxisId='cal' domain={[0,'dataMax +10']} />
        <Tooltip content={<CustomTooltip />} />
        <Legend
          content={<CustomLegend />}
          
          verticalAlign="top"
          align="right"
          margin={{ top: 10, right: 20, bottom: 50, left: 50 }}
        />
        <Bar
          name="Poids (kg)"
          dataKey="kilogram"
          radius={[20, 20, 0, 0]}
          maxBarSize={10}
          fill="black"
          id="kg"
          yAxisId='kg'
          unit="kg"
          margin={{ top: 10 }}
        />
        <Bar
          name="Calories brulées (Kcal)"
          dataKey="calories"
          fill="red"
          id="cal"
          yAxisId='cal'
          unit="Kcal"
          radius={[20, 20, 0, 0]}
          maxBarSize={10}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
