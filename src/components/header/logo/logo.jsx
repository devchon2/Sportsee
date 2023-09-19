import style from './logo.module.css'
import img from '../../../assets/logo.svg'
export default function Logo(){
  return (
    <div className={style.logoContainer}>
      <img className={style.logo} src={img} alt="Représentation du logo Sportsee" />
    </div>
  )
}