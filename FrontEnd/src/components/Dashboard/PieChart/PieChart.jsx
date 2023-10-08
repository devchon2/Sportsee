import { PieChart, ResponsiveContainer, Pie, Label, Legend } from "recharts";
import style from "./PieChart.module.css";

export default function PieChartComponent({ data }) {
  const angle = -180 - data[0].value * 3.6;

  function CustomLegend() {
    return <p className={style.legend}>Score</p>;
  }

  function CustomisedLabel(props) {
    return (
      <>
        <text
          className={style.labelScore}
          x="50%"
          y="45%"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {data[0].value}%
        </text>
        <text
          x="50%"
          y="55%"
          textAnchor="middle"
          dominantBaseline="middle"
          className={style.labelText}
        >
          de votre objectif
        </text>
      </>
    );
  }

  return (
    <ResponsiveContainer className={style.pieChartComponent} aspect={1}>
      <PieChart className={style.pieChart} >
        <Pie
          className={style.bar}
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius="100"
          innerRadius="90"
          cornerRadius={10}
          startAngle={-180}
          endAngle={angle}
          fill="red"
        />

        <Pie
          cx="50%"
          cy="50%"
          className={style.scoringText}
          data={data}
          dataKey="value"
          isAnimationActive={false}
          fill="white"
          outerRadius="89"
          innerRadius="0"
        >
          <Label
            content={<CustomisedLabel />}
            position="center"
            width={100}
            fontSize="1.4vh"
          />
        </Pie>
        <Legend
          className={style.legend}
          iconSize={0}
          align="left"
          verticalAlign="top"
          content={<CustomLegend />}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}
