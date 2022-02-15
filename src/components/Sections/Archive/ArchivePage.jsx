import React from "react"
import Archive from "../../Archive/Archive"
import Description from "../Title/Description"
import Title from "../Title/Title"

const ArchivePage = () => {
  return (
    <section>
      <div className="title-contain">
        <Title title="project archive" />
        <Description description="My previous work" />
      </div>
      <Archive />
    </section>
  )
}

export default ArchivePage
