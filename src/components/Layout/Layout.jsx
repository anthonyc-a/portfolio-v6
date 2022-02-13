import React from "react"
import Footer from "./Footer/Footer"
import Header from "./Header/Header"
import SEO from "./SEO/SEO"

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = React.useState(false)

  return (
    <>
      <SEO />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
