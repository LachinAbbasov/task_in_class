import React from 'react'
import { Link } from 'react-router-dom'
import '../../Scss/Header.scss'
export const Header = () => {
  return (
    <nav className='navbar '>
       
           
            <div className='nav_logo'><img src="https://preview.colorlib.com/theme/timezone/assets/img/logo/logo.png" alt="navimg" /></div>
         <div className='nav_links'>
            <ul>
                <li><Link to="/home"  className='nav-link'>Home</Link></li>
                <li><Link to="/add" className='nav-link'>Add</Link></li>
                <li><Link to="/basket" className='nav-link'>Basket</Link></li>
                <li><Link to="/wishlist" className='nav-link'>Wishlist</Link></li>
            </ul>
          
         </div>
        
          
      
        
    </nav>
  )
}
