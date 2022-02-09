import React from "react"
import Burger from "./Burger/Burger"
import Logo from "./Logo/Logo"
import NavMenu from "./NavMenu/NavMenu"

const Header = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className="header">
      <nav className="header-inner">
        <Logo />
        <Burger menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <NavMenu menuOpen={menuOpen} />
      </nav>
    </div>
  )
}

export default Header
