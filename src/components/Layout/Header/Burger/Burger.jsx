import React from "react"

const Burger = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className="burger"
      onClick={() => {
        setMenuOpen(!menuOpen)
      }}
      onKeyDown={() => {
        setMenuOpen(!menuOpen)
      }}
      role={"button"}
      tabIndex={0}
    >
      <div className={menuOpen ? "burger-inner active" : "burger-inner"}>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </div>
  )
}

export default Burger
