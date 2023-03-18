import React from 'react'

import './Header.scss'
import logo from '../img/Logo.svg'
const Header = () => {
  return (
    <header className="Header">
      <img src={logo} alt="Logo" className="Header__logo" />
    </header>
  )
}

export default Header
