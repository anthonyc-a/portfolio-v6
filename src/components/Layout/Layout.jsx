import React from "react"
import Footer from "./Footer/Footer"
import Header from "./Header/Header"

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = React.useState(false)

  return (
    <>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
