import React,{useState} from 'react'

import {GiHamburgerMenu} from "react-icons/gi";
import {MdOutlineRestaurantMenu} from "react-icons/md";

import {images} from "../../constants"
import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false); 

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="" />
      </div>

      <ul className="app__navbar-links">
        <li className="p_sans"><a href="#home">Home</a></li>
        <li className="p_sans"><a href="#about">About</a></li>
        <li className="p_sans"><a href="#menu">Menu</a></li>
        <li className="p_sans"><a href="#awards">Awards</a></li>
        <li className="p_sans"><a href="#content">Content</a></li>
      </ul>

      <div className="app__navbar-login">
        <a href="#login" className='p_sans'>Login / Registration</a>
          <div/>
        <a href="#bookTable" className='p_sans'>Book A Table</a>
      </div>

  

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu className="overlay_hamburg" color="#fff" fontSize={27} onClick={() =>{setToggleMenu(true)}}/>
        
          {toggleMenu && (
            <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() =>{setToggleMenu(false)}} />
            <ul className="app__smallscreen-links">
              <li className="p_opensans"><a href="#home">Home</a></li>
              <li className="p_opensans"><a href="#about">About</a></li>
              <li className="p_opensans"><a href="#menu">Menu</a></li>
              <li className="p_opensans"><a href="#awards">Awards</a></li>
              <li className="p_opensans"><a href="#contact">Contact</a></li>
            </ul>
          </div> 
          )}
          

      </div>
    </nav>
  )
}

export default Navbar