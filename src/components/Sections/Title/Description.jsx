import React from "react"
import { motion } from "framer-motion"

const appear = {
  hidden: {
    opacity: 0,
    transition: {
      ease: [0.51, 0.92, 0.24, 1],
      duration: 0.4,
    },
  },
  show: {
    opacity: 0.5,
    transition: {
      ease: [0.51, 0.92, 0.24, 1],
      duration: 0.4,
      delay: 0.4,
    },
  },
}

const Description = ({ description }) => {
  return (
    <motion.span variants={appear} initial="hidden" animate="show">
      {description}
    </motion.span>
  )
}

export default Description
