import Header from "../../components/header/header";
import MainErrorPage from './MainErrorPage/MainErrorPage';
import style from './ErrorPage.module.css'

export default function ErrorPage() {
  return (
    <div className={style.ErrorPage}>
      <Header />
      <MainErrorPage />
    </div>
  );
}
