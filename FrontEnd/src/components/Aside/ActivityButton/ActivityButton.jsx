import style from './ActivityButton.module.css'

export default function ActivityButton({ activity, icon }) {

  return (
    <button className={style.activityButton}><img src={icon} alt={`Logo de l'activité ${activity}`} /></button>
  )
}