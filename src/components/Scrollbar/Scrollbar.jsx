import React from "react"

const Scrollbar = () => {
  const [scrollTop, setScrollTop] = React.useState(0)

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight

    const scrolled = (winScroll / height) * 100

    setScrollTop(scrolled)
  }

  React.useEffect(() => {
    window.addEventListener("scroll", onScroll)

    return () => window.removeEventListener("scroll", onscroll)
  }, [])

  return (
    <div className="scrollbar">
      <div
        className="scrollbar-inner"
        style={{ height: `${scrollTop}%` }}
      ></div>
    </div>
  )
}

export default Scrollbar