import Header from "../../components/header/header.jsx";
import style from "./ProfilePage.module.css";
import { Navigate, useParams } from "react-router-dom";
import MainProfile from "./MainProfilePage/MainProfile";


  const AvailableIds = [12, 18];



export default function ProfilePage() {
  const { id } = useParams("id");
  const isExist = AvailableIds.includes(Number(id));
    

  if (isExist) {
    
    return (
      <div className={style.profilePage}>
        <Header />
        <MainProfile id={id}  />
      </div>
    );
  } else {
    return <Navigate to="/404" />;
  }
}
