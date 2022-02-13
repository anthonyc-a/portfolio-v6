import React from "react"
import Burger from "./Burger/Burger"
import Logo from "./Logo/Logo"
import Nav from "./Nav/Nav"
import NavMenu from "./NavMenu/NavMenu"
import ThemeSwitch from "./ThemeSwitch/ThemeSwitch"
import Time from "./Time/Time"

const Header = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className="header">
      <nav className="header-inner">
        <Logo />
        <Burger menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <NavMenu menuOpen={menuOpen} />
        <Time />
        <Nav />
        <ThemeSwitch />
      </nav>
    </div>
  )
}

export default Header
