import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './components/Header/Header'
import Home from './pages/Home/Home'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <div className="rotas">
        <Routes>
          <Route path='/' element={<Home />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
