import React from "react"
import Layout from "../components/Layout/Layout"
import Scrollbar from "../components/Scrollbar/Scrollbar"
import AllProjects from "../components/Sections/AllProjects/AllProjects"
import "../styles/Index/Index.css"

const Projects = () => {
  return (
    <>
      <Layout title="Projects | Anthony Animba - Freelance Web Designer and Developer in London">
        <AllProjects />
        <Scrollbar />
      </Layout>
    </>
  )
}

export default Projects
