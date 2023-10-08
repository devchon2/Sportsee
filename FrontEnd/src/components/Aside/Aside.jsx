import style from './Aside.module.css'
import yoga from '../../assets/yoga.svg'
import strenght from '../../assets/strenght.svg'
import bicycle from '../../assets/bicycle.svg'
import swimming from '../../assets/swimming.svg'
import ActivityButton from './ActivityButton/ActivityButton.jsx'

export default function Aside(){
  const activities = [
    {
      'name': 'yoga',
      'image': yoga
    },
    {
      'name': 'strenght',
      'image': strenght
    },
    {
      'name': 'swimming',
      'image': swimming
    },
    {
      'name': 'bicycle',
      'image': bicycle
    }]; 

  return (
    <aside className={style.aside} >
      {activities.map((activity) => {
        const { name,image} = activity;
        return (
        <ActivityButton key={Math.random()} activity={name} icon={image} />
        )
      })
    }
    <p className={style.copyRights}>Copiryght, SportSee 2020
</p>
    </aside>
  )
}