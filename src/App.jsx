import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router'
import Tareas from './Tareas'
import Contacto from './Contacto'
import Footer from './Footer'
import Navbar from './Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Tareas />} />
          <Route path="/tareas" element={<Tareas />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
