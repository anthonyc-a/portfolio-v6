import React from "react"

const Scrollbar = () => {
  const [scrollTop, setScrollTop] = React.useState(0)

  var doc = document.documentElement
  var w = window

  var prevScroll = w.scrollY || doc.scrollTop
  var curScroll
  const [direction, setDirection] = React.useState(0)

  var checkScroll = () => {
    curScroll = w.scrollY || doc.scrollTop
    if (curScroll > prevScroll) {
      setDirection(2)
    } else if (curScroll < prevScroll) {
      setDirection(1)
    }
    prevScroll = curScroll
  }

  window.addEventListener("scroll", checkScroll)

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
    <div className={direction === 2 ? "scrollbar raise" : "scrollbar"}>
      <div
        className="scrollbar-inner"
        style={{ height: `${scrollTop}%` }}
      ></div>
    </div>
  )
}

export default Scrollbar