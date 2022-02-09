import React from "react"
import Link from "gatsby-link"
import { motion } from "framer-motion"
import NavArrow from "./NavArrows/NavArrows"
import LinkArrow from "../Sections/Arrows/LinkArrow/LinkArrow"
import img1 from "../../../static/img/arch.webp"

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

const Projects = () => {
  return (
    <div className="projects">
      <div className="project-img-contain">
        <motion.div
          className="project-img-inner"
          variants={img}
          initial="hidden"
          animate="show"
        >
          <img src={img1} alt="" />
        </motion.div>
      </div>
      <div className="project-content">
        <div className="content-upper">
          <h3>archvizual.com</h3>
          <NavArrow />
        </div>
        <div className="project-type">design + code</div>
        <div className="content-lower">
          <a href="/">
            Visit site <LinkArrow />
          </a>
          <Link to="/projects">All projects</Link>
        </div>
      </div>
    </div>
  )
}

export default Projects
