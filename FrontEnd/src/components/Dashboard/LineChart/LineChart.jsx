import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Rectangle,
  Legend,
} from "recharts";
import style from "./LineChart.module.css";

function CustomTooltip({ active, payload }) {
  if (active && payload && payload.length) {

    return (
      <div className={style.tooltip}>
        {payload.map((payl, index) => {
          const { value } = payl;

          return (
            <div key={index}>
              <p className={style.label}>{`${value}min`}</p>

            </div>
          );
        })}
      </div>
    );
  }
  return null;
};

function CustomCursor(payload) {

  const { points } = payload;
  const { x } = points[0];
  return (
    <Rectangle className={style.rectangle} x={x} y={0} width={500} height={500} fill="rgba(0, 0, 0, 0.2)" />
  );
}

function CustomLegend({ payload }) {
  return (
    <div className={style.legend}>
      {payload.map(() => {
        return (
          <div key={Math.random()} className={style.legendItem}>

            <p className={style.legendText}>{`Durée moyenne 
                                                des sessions` }</p>
          </div>
        );
      })}
    </div>
  );
}




export default function LineChartComponent({ data }) {
  return (
    <ResponsiveContainer className={style.linechartComponent} width="30%" height="100%" aspect={1}>
      <LineChart
        data={data}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}

      >

        <XAxis type="category"
          dataKey="day"
          stroke="white"
          tickSize={0}
          tick={{ fontSize: "1.2vh", opacity: 0.5 }}
          tickMargin={10}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          type="number"
          dataKey="sessionLength"
          stroke="white"
          hide={true}
          domain={["dataMin-15", "dataMax + 25"]}
        />
        <Line
          className={style.line}
          dataKey="sessionLength"
          type="natural"
          stroke="white"
          dot={false}
          strokeWidth={2}
          domain={["dataMin - 5 ", "dataMax + 5"]}
          cursor={<CustomCursor />}

        />
        <Legend align='left' verticalAlign="top" content={<CustomLegend />} />
        <Tooltip content={<CustomTooltip />} cursor={<CustomCursor />} />
      </LineChart>
    </ResponsiveContainer>
  );
}
