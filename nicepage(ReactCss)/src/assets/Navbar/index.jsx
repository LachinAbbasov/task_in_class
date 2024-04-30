import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './index.css'
import { CloseButton } from '@chakra-ui/react'
const Navbar = () => {
    const offRef = useRef()
    const ovRef = useRef()
// window.addEventListener('click',(event)=>{
//     if (offRef.current.classList.contains('openOff')) {
//         offRef.current.classList.remove('openOff')
//         ovRef.current.classList.remove('openOverlay')
//       }

// })
    return (
        <div className="navbar" style={navbarStyle}>
            <a href="#" className="navbar-logo"><img src="https://capp.nicepage.com/images/default-logo.png" alt="" /></a>

            <FontAwesomeIcon onClick={() => {
                offRef.current.classList.add('openOff')
                ovRef.current.classList.add('openOverlay')
            }} icon={faBars} className="navbar-bars-icon" />
            <div ref={ovRef}className="overlay">

            </div>
            <div ref={offRef} className="offCan">
                <button onClick={() => {
                    offRef.current.classList.remove('openOff')
                    ovRef.current.classList.remove('openOverlay')
                }}> <CloseButton size='lg' /></button>
                <div style={listyle} className="navbar-menu" id="navbarMenu">
                    <a href="#" className="navbar-menu-item home">Home</a>
                    <a href="#" className="navbar-menu-item about">About Us</a>
                </div>
            </div>
        </div>
    );
}

const navbarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    backgroundColor: '#fff',
    color: 'white',
    fontFamily: 'Arial, sans-serif'
};

const listyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: "20px"

}

export default Navbar;
