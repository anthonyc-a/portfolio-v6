import React from "react"
import {
  ThemeDispatchContext,
  ThemeStateContext,
} from "../../../Context/ToggleThemeProvider"

const ThemeSwitch = () => {
  const theme = React.useContext(ThemeStateContext)
  const toggleTheme = React.useContext(ThemeDispatchContext)

  return (
    <div
      className="theme-switch"
      onClick={() => {
        theme.lightMode === false
          ? toggleTheme({ type: "LIGHT_THEME" })
          : toggleTheme({ type: "DARK_THEME" })
      }}
      onKeyDown={() => {
        theme.lightMode === false
          ? toggleTheme({ type: "LIGHT_THEME" })
          : toggleTheme({ type: "DARK_THEME" })
      }}
      role={"button"}
      tabIndex={0}
    >
      <div className="switch-inner">
        <div
          className={
            theme.lightMode === false ? "switch-dot" : "switch-dot active"
          }
        ></div>
      </div>
    </div>
  )
}

export default ThemeSwitch
