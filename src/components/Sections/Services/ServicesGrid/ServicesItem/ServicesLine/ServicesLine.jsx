import React from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

const ServicesLine = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 1,
  })

  const animation = useAnimation()

  React.useEffect(() => {
    if (inView) {
      animation.start({
        width: "100%",
        transition: {
          ease: [0.51, 0.92, 0.24, 1],
          duration: 1,
          delay: 0.6
        },
      })
    }

    if (!inView) {
      animation.start({
        width: 0,
      })
    }
  }, [inView])
  return (
    <motion.div
      className="services-line"
      ref={ref}
      animate={animation}
    ></motion.div>
  )
}

export default ServicesLine
