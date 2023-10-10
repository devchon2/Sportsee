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
          y="50%"
          textAnchor="middle"
          dominantBaseline="top"
        >
          {data[0].value}%
        </text>
        <text
          x="50%"
          y="60%"
          textAnchor="middle"
          dominantBaseline="bottom"
          className={style.labelText}
        >
          de votre objectif
        </text>
      </>
    );
  }

  

  return (
    <ResponsiveContainer className={style.pieChartComponent} >
      <PieChart className={style.pieChart} >
        <Pie
          className={style.bar}
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius="80%"
          innerRadius="70%"
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
          outerRadius="69%"
          innerRadius="0%"
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
