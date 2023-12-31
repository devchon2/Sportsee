import Header from "../../components/header/header.jsx";
import style from "./ProfilePage.module.css";
import { Navigate, useParams } from "react-router-dom";
import MainProfile from "./MainProfilePage/MainProfile";


export default function ProfilePage() {
  const { id } = useParams("id");
  const AvailableIds = [12, 18];

  const isExist = AvailableIds.includes(Number(id));

  if (!isExist) {
    return <Navigate to="/404" />;
  }

  return (
    <div className={style.profilePage}>
      <Header />
      <MainProfile id={id} />
    </div>
  );
}

