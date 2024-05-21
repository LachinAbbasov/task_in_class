import React from 'react'
import { Basket } from './Components/pages/Basket'
import {BrowserRouter as Router ,Routes ,Route} from 'react-router-dom'
import { Header } from './Components/Header/Header'
import {Home} from './Components/pages/Home/Home'
import './App.css'
// import 'bootstrap/dist/css/bootstrap.css'
 const App = () => {
  return (
   <Router>
    <Header/>
    <Routes>
      <Route path="/"  element ={<Home/>}/>
      <Route path="/basket" element={<Basket/>}/>
    </Routes>
   </Router>
  )
}

export default App;
