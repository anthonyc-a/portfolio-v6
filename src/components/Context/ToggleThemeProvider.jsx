import React from "react"

export const ThemeStateContext = React.createContext()
export const ThemeDispatchContext = React.createContext()

const initialState = {
  lightMode: true,
}

function reducer(state, action) {
  switch (action.type) {
    case "LIGHT_THEME": {
      return {
        ...state,
        lightMode: state.lightMode === false ? true : true,
      }
    }

    default:
  }

  switch (action.type) {
    case "DARK_THEME": {
      return {
        ...state,
        lightMode: state.lightMode === true ? false : false,
      }
    }

    default:
  }
}

const ToggleThemeProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  return (
    <ThemeStateContext.Provider value={state}>
      <ThemeDispatchContext.Provider value={dispatch}>
        {children}
      </ThemeDispatchContext.Provider>
    </ThemeStateContext.Provider>
  )
}

export default ToggleThemeProvider
