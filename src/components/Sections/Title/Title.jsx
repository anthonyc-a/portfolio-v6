import React from "react"
import { motion } from "framer-motion"


const img = {
  hidden: {
    width: "0%",
    transition: {
      ease: [0.51, 0.92, 0.24, 1],
      duration: 0.4,
    },
  },
  show: {
    width: "100%",
    transition: {
      ease: [0.51, 0.92, 0.24, 1],
      duration: 4,
    },
  },
}

const Title = ({ title }) => {
  return (
    <div className="title">
      <h2>{title}</h2>
    </div>
  )
}

export default Title
