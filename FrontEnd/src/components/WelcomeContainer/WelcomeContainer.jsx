import style from './WelcomeContainer.module.css'

export default function WelcomeContainer({ firstName }) {
  return (
    <div className={style.welcomeContainer}>
      <div className={style.welcomeMsg}>
        <p className={style.welcome}>
          Bonjour <span className={style.firstName}>{firstName}</span>
        </p>
        <p className={style.congratulations}>
          Félicitation ! Vous avez explosé vos objectifs hier 👏
        </p>
      </div>
    </div>

  )


}
