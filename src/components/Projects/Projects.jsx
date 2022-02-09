import React from "react"
import Link from "gatsby-link"
import NavArrow from "./NavArrows/NavArrows"
import LinkArrow from "../Sections/Arrows/LinkArrow/LinkArrow"
import img1 from "../../../static/img/arch.webp"

const Projects = () => {
  return (
    <div className="projects">
      <div className="project-img-contain">
        <div className="project-img-inner">
          <img src={img1} alt="" />
        </div>
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
