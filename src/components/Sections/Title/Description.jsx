import React from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

const Description = ({ description }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 1,
  })

  const animation = useAnimation()

  React.useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1,
        transition: {
          ease: [0.51, 0.92, 0.24, 1],
          duration: 0.6,
          delay: 0.3,
        },
      })
    }

    if (!inView) {
      animation.start({
        y: "100%",
        opacity: 0,
      })
    }
  }, [inView])

  return (
    <div className="description" ref={ref}>
      <motion.span animate={animation}>{description}</motion.span>
    </div>
  )
}

export default Description
