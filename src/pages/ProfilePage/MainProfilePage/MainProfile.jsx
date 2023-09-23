import style from './MainProfile.module.css';
import Aside from '../../../components/Aside/Aside'
import Dashboard from '../../../components/Dashboard/Dashboard'
import { useEffect, useState } from 'react';
import getProfile from '../../../Services/ProfileRequest.js';

 

export default  function MainProfile({id, type}){
    const sourceType = type === 'mock' ? 'mock' : 'api'
const [profile, setProfile] = useState(getProfile(id,sourceType))
console.log(sourceType)
  useEffect(() => {
     getProfile(id,sourceType).then((profil) => {
       setProfile(profil);
     });
    },[sourceType,id]);

 
 return (
  <section className={style.mainSection}>
    <Aside />
    <Dashboard id={id} profil={profile}/>
  </section>

 )


}