import React from "react"
import Header from "./Header/Header"

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = React.useState(false)

  return (
    <>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>{children}</main>
    </>
  )
}

export default Layout
