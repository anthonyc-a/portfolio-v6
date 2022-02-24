import React from "react"
import Burger from "./Burger/Burger"
import Logo from "./Logo/Logo"
import Nav from "./Nav/Nav"
import NavMenu from "./NavMenu/NavMenu"
import ThemeSwitch from "./ThemeSwitch/ThemeSwitch"
import Time from "./Time/Time"

const Header = ({ menuOpen, setMenuOpen }) => {
  const [direction, setDirection] = React.useState(0)

  React.useEffect(() => {
    var doc = document.documentElement
    var w = window

    var prevScroll = w.scrollY || doc.scrollTop
    var curScroll

    var checkScroll = () => {
      curScroll = w.scrollY || doc.scrollTop
      if (curScroll > prevScroll) {
        setDirection(2)
      } else if (curScroll < prevScroll) {
        setDirection(1)
      }
      prevScroll = curScroll
    }

    window.addEventListener("scroll", checkScroll)
  }, [])

  return (
    <div className={direction === 2 ? "header hide" : "header"}>
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
