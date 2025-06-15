import React from 'react'
import {BrowserRouter,  Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import AddPage from '../pages/AddPage'
import StudentContext from './context/StudentContext'
import Entry from '../pages/Entry'

const App = () => {
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