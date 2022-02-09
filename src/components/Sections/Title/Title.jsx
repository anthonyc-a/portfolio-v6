import React from "react"
import { motion } from "framer-motion"

const rise = {
  hidden: {
    y: "100%",
    transition: {
      ease: [0.51, 0.92, 0.24, 1],
      duration: 0.4,
    },
  },
  show: {
    y: "0%",
    transition: {
      ease: [0.51, 0.92, 0.24, 1],
      duration: 0.4,
    },
  },
}

const Title = ({ title }) => {
  return (
    <div className="title">
      <motion.h2 variants={rise} initial="hidden" animate="show">
        {title}
      </motion.h2>
    </div>
  )
}

export default Title
