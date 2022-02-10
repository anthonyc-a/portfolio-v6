import React from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import ServicesLine from "./ServicesLine/ServicesLine"

const ServicesItem = ({ title, icon, description }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0,
  })

  const animation = useAnimation()

  React.useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        transition: {
          ease: [0.51, 0.92, 0.24, 1],
          duration: 0.4,
          delay: 0.8
        },
      })
    }

    if (!inView) {
      animation.start({
        y: "100%",
      })
    }
  }, [inView])

  return (
    <div className="services-item" ref={ref}>
      <div className="services-header">
        <motion.h3 animate={animation}>{title}</motion.h3>
        <img src={icon} alt="Services Icon" />
      </div>
      <ServicesLine />
      <div className="services-txt">
        <p>{description}</p>
      </div>
    </div>
  )
}

export default ServicesItem
