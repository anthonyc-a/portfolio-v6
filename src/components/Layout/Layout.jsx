import React from "react"
import Cursor from "./Cursor/Cursor"
import CursorDot from "./Cursor/CursorDot"
import Footer from "./Footer/Footer"
import Header from "./Header/Header"
import SEO from "./SEO/SEO"

const Layout = ({ children, title }) => {
  const [menuOpen, setMenuOpen] = React.useState(false)

  return (
    <>
      <SEO title={title} />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
