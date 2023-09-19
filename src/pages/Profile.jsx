import DataController from '../DataControllers/DataController.js'
import Header from '../components/header/header.jsx'
import style from './Profile.module.css'


export default function Profile({id}){
const profile = new DataController(12);
const user =((profile.getUserInfos()).then(data => data.data).then(data => (data.id)))
const userId = user.id
console.log(userId)
return(
 <div className={style.profilePage}>
  <Header />
</div> 
)

}