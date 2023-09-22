import Header from "../../components/header/header.jsx";
import MainHomePage from "./mainHomePage.jsx";
import style from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={style.homePage}>
      <Header />
      <MainHomePage />
      
    </div>
  );
}
