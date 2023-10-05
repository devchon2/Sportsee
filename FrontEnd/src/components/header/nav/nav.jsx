import { NavLink } from 'react-router-dom'
import style from './nav.module.css'

export default function Nav(){
  return (
    <nav className={style.navMenu}>
      <NavLink className={style.navLink} to={'/'}>Accueil</NavLink>
      <NavLink className={style.navLink} to={'/Profile'}>Profil</NavLink>
      <NavLink className={style.navLink} to={'/Settings'}>Réglages</NavLink>
      <NavLink className={style.navLink} to={'/Community'}>Communauté</NavLink> 
    </nav>
  )
}