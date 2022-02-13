import React from "react"
import SideArrow from "./SideArrow"

const NavArrows = ({ count, setCount }) => {
  return (
    <div className="nav-arrows">
      <div
        className={count === 0 ? "arrow inactive" : "arrow"}
        onClick={() => {
          count <= 0 ? setCount(count) : setCount(count - 1)
        }}
      >
        <SideArrow />
      </div>
      <div
        className={count === 2 ? "arrow inactive" : "arrow"}
        onClick={() => {
          count >= 2 ? setCount(count) : setCount(count + 1)
        }}
      >
        <SideArrow />
      </div>
    </div>
  )
}

export default NavArrows
