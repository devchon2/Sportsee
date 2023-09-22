import './App.css';
import { Routes,Route, Navigate } from 'react-router-dom';
import ProfilePage from './pages/ProfilePage/ProfilePage.jsx';
import HomePage from './pages/HomePage/HomePage';
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx';

export default function App() {
  
  return (
  <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/profile/:id' element={<ProfilePage />}/>
    <Route path='/404' element={<ErrorPage/>}/>
    <Route  path='*' element={<Navigate to='/404'/>} />
  </Routes>
  )
  }

