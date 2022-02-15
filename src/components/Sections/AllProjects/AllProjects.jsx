import React from "react"
import Projects from "../../Projects/Projects"
import Description from "../Title/Description"
import Title from "../Title/Title"

const AllProjects = () => {
  return (
    <section>
      <div className="title-contain">
        <Title title="all projects" />
        <Description description="My recent work" />
      </div>
      <Projects next={"Archive"} link={"/archive"} />
    </section>
  )
}

export default AllProjects
