import style from "./Dashboard.module.css";

export default function Dashboard({ id, profil }) {
 console.log(profil)
  
 return (
    <div className={style.dashboardContainer}>
      <div className={style.welcomecontainer}>
        <div className={style.welcomeMsg}>
          <p>
            Bonjour <span className={style.lastName}>{profil.firstName}</span>
          </p>
        </div>
      </div>
      <section className={style.graphsSection}>
        <div>Test du Dashboard</div>
      </section>
    </div>
  );
}
