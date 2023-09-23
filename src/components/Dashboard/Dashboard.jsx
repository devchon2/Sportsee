import style from './Dashboard.module.css'

export default function Dashboard({id, datas}) {

  return (
    <section className={style.dashboardSection}>
      <div className={style.welcomecontainer}>
        <div className={style.welcomeMsg}>
          <p>Bonjour <span className={style.lastName}>prénom</span></p>
        </div>
      </div>
      <div>Test du Dashboard</div>
    </section>
  )
}