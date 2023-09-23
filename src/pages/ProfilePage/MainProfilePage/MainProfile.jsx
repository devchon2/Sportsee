import style from './MainProfile.module.css';
import Aside from '../../../components/Aside/Aside'
import Dashboard from '../../../components/Dashboard/Dashboard'
import { useEffect, useState } from 'react';
import getProfile from '../../../Services/ProfileRequest.js';

 

export default function MainProfile({id}){
  const [profile, setProfile] = useState(null);
  
  useEffect(() => {
     getProfile(id,'mock').then((profil) => {
       setProfile(profil);
     });
    }, [id]);

 
 return (
  <section className={style.mainSection}>
    <Aside />
    <Dashboard id={id} profil={profile}/>
  </section>

 )


}