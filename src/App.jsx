import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from "./components/Header/Header"
import Sidebar from './components/Sidebar/Sidebar'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className='flex'>
        {/* Sidebar */}
        <div>
          <Sidebar />
        </div>
        {/* Main Content */}
        <div>
          <Routes>
            <Route />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}
