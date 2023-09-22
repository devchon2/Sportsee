
import Header from "../../components/header/header.jsx";
import style from "./ProfilePage.module.css";
import { Navigate, useParams } from "react-router-dom";

export default function ProfilePage() {
    const  {id}  = useParams('id')
    console.log(id)
    const AvailableIds = [12,18]
    const isExist = AvailableIds.includes(Number(id));
    console.log(isExist)


  if (isExist){
    return (
      <div className={style.profilePage}>
        <Header />
        <h1>ProfilePage</h1>
      </div>
    )
  } else {
  return <Navigate to='/404'/>
}
}
