import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import 'bootstrap/dist/css/bootstrap.css';
import {Add} from './pages/Add';


function App() {
  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        {/* <Route path="/basket" element={<Basket />} /> */}
        {/* <Route path="/wishlist" element={<Wishlist />} /> */}
      </Routes>
    </Router>
  )
}

export default App
