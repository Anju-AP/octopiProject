import React from 'react'
import Login from './components/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './components/Register'
import "./index.css"
import Assesment from './components/Assesment'
import Possition from './components/Possition'
const App = () => {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route element={<Login/>} path='/'/>
        <Route element={<Register/>} path='/register'/>
        <Route element={<Assesment/>} path='/assesment/:id'/>
        <Route element={<Possition/>} path='/position'/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
