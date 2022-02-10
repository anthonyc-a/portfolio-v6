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
      delay: 0.2,
    },
  },
}

const Description = ({ description }) => {
  return (
    <div className="description">
      <motion.span variants={rise} initial="hidden" animate="show">
        {description}
      </motion.span>
    </div>
  )
}

export default Description
