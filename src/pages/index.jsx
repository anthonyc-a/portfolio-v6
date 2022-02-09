import React from "react"
import Layout from "../components/Layout/Layout"
import HomeProjects from "../components/Sections/HomeProjects/HomeProjects"
import "../styles/Index/Index.css"

const Home = () => {
  return (
    <>
      <Layout>
        <HomeProjects />
      </Layout>
    </>
  )
}

export default Home
