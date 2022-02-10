import React from "react"
import Projects from "../../Projects/Projects"
import Description from "../Title/Description"
import Title from "../Title/Title"

const HomeProjects = () => {
  return (
    <section>
      <div className="title-contain">
        <Title title="featured projects" />
        <Description description="Some selected work" />
      </div>
      <Projects />
    </section>
  )
}

export default HomeProjects
