import React from "react"
import Link from "gatsby-link"

const Nav = () => {
  return (
    <ul className="nav">
      <li>
        <Link to="/projects" activeClassName="active" partiallyActive={true}>
          Projects
        </Link>
      </li>
      <li>
        <Link to="/archive" activeClassName="active" partiallyActive={true}>
          Archive
        </Link>
      </li>
      <li>
        <a href="mailto:anthonyc.animba@gmail.com">Contact</a>
      </li>
    </ul>
  )
}

export default Nav
