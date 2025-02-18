import React from 'react'
import { Link } from "react-router-dom";
import'./Navbar.css'
const Navbar = () => {
  return (
    <header className="header">
        <a href="/" className="logo">FITNESS FREAK</a>
        <nav className="navbar">
          
        </nav>
        <a href="/">Home</a>
        <a href="">Workout</a>
        <a href="/">Nutriation</a>
        <a href="/">Challages</a>
        <a href="/">About</a>
        <a href="/">Login</a>
        
        
    </header>
  )
}

export default Navbar
