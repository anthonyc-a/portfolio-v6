import React from "react"
import SideArrow from "./SideArrow"

const NavArrows = ({ count, setCount, description }) => {
  return (
    <div
      className={description === false ? "nav-arrows stretch" : "nav-arrows"}
    >
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
