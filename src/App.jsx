import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from "./components/Header/Header"

export default function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route />
      </Routes>
    </BrowserRouter>
  )
}