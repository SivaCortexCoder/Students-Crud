import React, { useEffect } from 'react'
import {BrowserRouter,  Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import AddPage from '../pages/AddPage'
import StudentContext from './context/StudentContext'
import Entry from '../pages/Entry'
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {

   useEffect(() => {
    AOS.init({
      duration: 1000, // how long animation runs
      once: true,     // 👈 animate only once
      offset: 100,    // trigger offset
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-200 to-cyan-200">
      <StudentContext>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Entry/>} />
            <Route path='/home' element={<Home/>}/>
            <Route path='/create' element={<AddPage/>}/>
          </Routes>
        </BrowserRouter>
      </StudentContext>
    </div>
  )
}

export default App