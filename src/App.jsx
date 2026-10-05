import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import RootLayouts from './layouts/RootLayouts'
import Home from './pages/Home'
import About from './pages/About'
import Error from './pages/Error'


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayouts />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>

    </>
  )
}

export default App
