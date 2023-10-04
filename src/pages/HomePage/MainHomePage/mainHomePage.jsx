import style from "./mainHomePage.module.css";
import { Link } from "react-router-dom";


export default function MainHomePage() {
  return (
    <div className={style.choiceMenu}>
      <Link className={style.choiceLink} to="/profile/12">
        Karl
      </Link>
      <Link className={style.choiceLink} to="/profile/18">
        Cécilia{" "}
      </Link>
    </div>
  );
}
