import style from "./Radialchart.module.css";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
  Label,
} from "recharts";

export default function RadialChartComponent({ data }) {
  if (data) {
    const value = data[0].value;
    const angle = (data[0].value * 360) / 100;
    console.log("value", angle);
    return (
      <ResponsiveContainer
        title={`${data[0].value}% de votre objectif`}
        className={style.radialChartContainer}
        width="30%"
        height="100%"
      >
        <RadialBarChart
          className={style.radialChart}
          innerRadius={"90"}
          outerRadius={100}
          barSize={10}
          data={data}
          startAngle={180}
          endAngle={180 - angle}
        >
          <RadialBar
            title={`${value}% de votre bojectif`}
            fill="red"
            radius={10}
            className={style.radialBar}
            autoReverse={true}
            start
            Angle={0}
            endAngle={angle}
            clockWise={true}
            dataKey="value"
          />
          
          <Label
            value={`${value}% de votre objectif`}
            position="inside"
            fill="white"
            fontSize={20}
            opacity={1}
          />

          <Legend
            iconSize={10}
            layout="vertical"
            verticalAlign="top"
            align="left"
            wrapperStyle={style}
            opacity={0.7}
            iconType="circle"
          />
        </RadialBarChart>
      </ResponsiveContainer>
    );
  }
  return null;
}
