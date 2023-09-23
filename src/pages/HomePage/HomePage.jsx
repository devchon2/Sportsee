import Header from "../../components/header/header"
import MainHomePage from "./MainHomePage/mainHomePage";
import style from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={style.homePage}>
      <Header />
      <MainHomePage />
    </div>
  );
}
