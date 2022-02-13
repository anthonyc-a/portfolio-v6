import React from "react"
import ToggleThemeProvider from "./src/components/Context/ToggleThemeProvider"

export const wrapRootElement = ({ element }) => {
  return (
    <ToggleThemeProvider>
      {element}
    </ToggleThemeProvider>
  )
}