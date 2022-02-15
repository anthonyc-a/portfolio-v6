import React from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

const Title = ({ title }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 1,
  })
  const animation = useAnimation()

  React.useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: "0%",
        transition: {
          ease: [0.51, 0.92, 0.24, 1],
          duration: 0.6,
        },
      })
    }

    if (!inView) {
      animation.start({
        opacity: 0,
        y: "100%",
      })
    }
  }, [inView])

  return (
    <div className="title" ref={ref}>
      <motion.h2 animate={animation}>
        {title}
      </motion.h2>
    </div>
  )
}

export default Title
