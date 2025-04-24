import React from 'react'
import './Header.css'
import logo from '../../img/Dragon_Ball_Super.png';

// import { useState } from 'react'

const Header = () => {
  return (
    <header>
      <div className="header-container">
      <img id="logo" src={logo} alt="Logo"/>
      <h1>API DE DRAGON BALL SUPER</h1>
      <h2>PERSONAJES</h2>
     </div>
    </header>
  )
}

export default Header
