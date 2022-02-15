import React from "react"
import { Helmet } from "react-helmet"
import { ThemeStateContext } from "../../Context/ToggleThemeProvider"
import icon from "../../../../static/logo192.png"

const SEO = ({title}) => {
  const theme = React.useContext(ThemeStateContext)
  const themeClass = theme.lightMode === false ? "dark-theme" : "light-theme"

  return (
    <Helmet>
      <html lang="en" className={themeClass} />
      <title>
        {title}
      </title>
      <meta
        name="description"
        content="Anthony Animba, a freelance web designer and developer based in London. I work with individuals and small to medium sized businesses to help them stand out on the web."
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no"
      />
      <link rel="icon" href={icon} type="image/png" />
    
    </Helmet>
  )
}

export default SEO
