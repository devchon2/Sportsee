import style from './MainProfile.module.css';
import Aside from '../../../components/Aside/Aside';
import Dashboard from '../../../components/Dashboard/Dashboard';


 

export default  function MainProfile({id}){
  

 return (
  <section className={style.mainSection}>
    <Aside />
    <Dashboard id={id} />
  </section>

 )


}