import React from "react"
import Layout from "../components/Layout/Layout"
import About from "../components/Sections/About/About"
import HomeProjects from "../components/Sections/HomeProjects/HomeProjects"
import "../styles/Index/Index.css"

const Home = () => {
  return (
    <>
      <Layout>
        <HomeProjects />
        <About />
      </Layout>
    </>
  )
}

export default Home
