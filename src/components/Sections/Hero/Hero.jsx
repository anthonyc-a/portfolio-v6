import React from "react"
import Helmet from "react-helmet"
import * as p5 from "p5";
import TRUNK from "vanta/dist/vanta.trunk.min"

const Hero = () => {
  const [vantaEffect, setVantaEffect] = React.useState(0)

  const myRef = React.useRef(null)

  React.useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        TRUNK({
          el: myRef.current,
          mouseControls: false,
          touchControls: false,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x8d8d8d,
          backgroundColor: 0xe3e1e0,
          spacing: 0,
          chaos: 1.0,
          p5: p5, 
        })
      )
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return (
    <section className="hero">
      <div className="bg" ref={myRef}>
      </div>
    </section>
  )
}

export default Hero
