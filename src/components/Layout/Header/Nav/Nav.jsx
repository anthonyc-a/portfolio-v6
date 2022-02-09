import React from "react"
import Link from "gatsby-link"

const Nav = () => {
  return (
    <ul className="nav">
      <li>
        <Link to="/projects">Projects</Link>
      </li>
      <li>
        <Link to="/archive">Archive</Link>
      </li>
      <li>
        <a href="mailto:anthonyc.animba@gmail.com">Contact</a>
      </li>
    </ul>
  )
}

export default Nav
