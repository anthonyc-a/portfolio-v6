import React from "react"
import { motion } from "framer-motion"

const SocialIcon = ({ img, link, animation }) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="social-icon"
      animate={animation}
    >
      <img src={img} alt="Social Icon" />
    </motion.a>
  )
}

export default SocialIcon
