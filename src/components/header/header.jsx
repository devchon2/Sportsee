import style from './header.module.css'
import Logo from './logo/logo'
import Nav from './nav/nav'

export default function Header(){
return (
  <header className={style.header}>
    <Logo />
    <Nav />
  </header>
)

}
