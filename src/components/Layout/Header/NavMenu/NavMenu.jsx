import React from "react"
import MenuList from "./MenuList/MenuList"

const NavMenu = ({ menuOpen }) => {
  return (
    <div className={menuOpen ? "nav-menu active" : "nav-menu"}>
      <MenuList menuOpen={menuOpen} />
      <div className="menu-copyright">© 2022</div>
    </div>
  )
}

export default NavMenu
