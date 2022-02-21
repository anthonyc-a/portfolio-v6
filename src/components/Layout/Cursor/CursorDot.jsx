import React from "react"

const CursorDot = () => {
  const cursorRef = React.useRef()

  const cursorFunction = () => {
    if (cursorRef.current) {
      document.addEventListener("mousemove", event => {
        const { clientX, clientY } = event
        const mouseX = clientX - cursorRef.current.clientWidth / 2
        const mouseY = clientY - cursorRef.current.clientHeight / 2
        cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0 )`
        cursorRef.current.style.opacity = 1
      })
    }
  }

  React.useEffect(() => {
    cursorRef.current.style.opacity = 0
    window.onload = cursorFunction()
  }, [cursorRef])

  return <div className="cursor-dot" ref={cursorRef}></div>
}

export default CursorDot
