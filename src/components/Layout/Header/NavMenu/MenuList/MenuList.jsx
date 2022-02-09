import React from "react"
import Link from "gatsby-link"
import { motion } from "framer-motion"

const navLinks = {
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

const link = {
  hidden: {
    opacity: 0,
    y: "100%",
    transition: {
      ease: [0.51, 0.92, 0.24, 1],
      duration: 0.4,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.51, 0.92, 0.24, 1],
      duration: 0.4,
    },
  },
}

const MenuList = ({ menuOpen }) => {
  return (
    <motion.ul
      className="menu-list"
      animate={menuOpen === true ? "show" : "hidden"}
      variants={navLinks}
    >
      <li>
        <motion.div className="link-contain" variants={link}>
          <Link to="/projects">projects</Link>
        </motion.div>
      </li>
      <li>
        <motion.div className="link-contain" variants={link}>
          <Link to="/archive">archive</Link>
        </motion.div>
      </li>
      <li>
        <motion.div className="link-contain" variants={link}>
          <a href="mailto:anthonyc.animba@gmail.com">contact</a>
        </motion.div>
      </li>
    </motion.ul>
  )
}

export default MenuList
