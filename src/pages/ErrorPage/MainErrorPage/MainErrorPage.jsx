import { Link } from "react-router-dom";
import style from "./MainErrorPage.module.css";

export default function MainErrorPage() {
  return (
    <div className={style.mainErrorPage}>
      <h1 className={style.errorTitle}>Erreur <span className={style.errorType}> 404</span></h1>
      <p className={style.oups}>Oups! Cette page n'est pas disponible actuellement!</p>

      <Link className={style.errorLink} to="/">Naviguer vers l'accueil</Link>
    </div>
  );
}
