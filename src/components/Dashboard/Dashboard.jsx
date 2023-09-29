
import WelcomeContainer from "../WelcomeContainer/WelcomeContainer.jsx";
import BarChartContainer from "./Barcharts/Barchart";
import style from "./Dashboard.module.css";
import getProfile from "../../Services/ProfileRequest.js";
import { useState, useEffect } from "react";
import RadarCharts from "./RadarChart/Radarchart.jsx";
import LineChartComponent from "./LineChart/LineChart.jsx";
import RadialChartComponent from "./RadialChart/Radialchart.jsx";

export default function Dashboard({ id }) {
  const type = "api";
  const [profil, setProfil] = useState("");

  useEffect(() => {
    async function fetchData() {
      const reponse = await getProfile(id, type);
      setProfil(reponse);
    }
    fetchData();
  }, [id]);


  console.log(profil)
const { formatedAverage, formatedSessions, keydata,score, firstName, formatedActivities } = profil



  return (
    <div className={style.dashboardContainer}>
      <WelcomeContainer firstName={firstName} />
      <section className={style.viewStats}>
        <div className={style.graphsSection}>
          <BarChartContainer activities={formatedSessions} />

          <div className={style.graphSectionDown}>
            <LineChartComponent data={formatedAverage}/>
            <RadarCharts data={formatedActivities} />
            <RadialChartComponent data={score} />
          </div>
        </div>
        <div className={style.keyDatasContainer}>keydatasContainer</div>
      </section>
    </div>
  );
}
