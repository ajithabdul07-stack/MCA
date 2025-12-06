import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GarbageManagementSystem from './garbage'
import MentalHealthPlatform from './hope'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Test from './test'

function App() {
  

  return (
    <>
     {/* <GarbageManagementSystem /> */}
     <BrowserRouter>
       <Routes>
        <Route path='/' element={ <Test />} />
        <Route path='/mentalhealth' element={ <MentalHealthPlatform />} />
        <Route path='/garbage' element={ <GarbageManagementSystem />} />
       </Routes>
     </BrowserRouter>
    
    </>
  )
}

export default App
