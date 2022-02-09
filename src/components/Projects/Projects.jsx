import React from "react"
import Link from "gatsby-link"

const Projects = () => {
  return (
    <div className="projects">
      <div className="project-img-contain"></div>
      <div className="project-content">
        <div className="content-upper">
          <h3>archvizual.com</h3>
          <div className="nav-arrows"></div>
        </div>
        <div className="project-type">design + code</div>
        <div className="content-lower">
            <a href="/">Visit site</a>
            <Link to="/projects">All projects</Link>
        </div>
      </div>
    </div>
  )
}

export default Projects
