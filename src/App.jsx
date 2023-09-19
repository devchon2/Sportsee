import './App.css';
import { Routes,Route } from 'react-router-dom';
import Profile from './pages/Profile.jsx'

export default function App() {
  
  return (
  <Routes>
    <Route path='/' element={<Profile/>}/>
    {/* <Route path='/' element={<Test/>}/>
    <Route path='/' element={<Test/>}/> */}
  </Routes>
  )
  }

