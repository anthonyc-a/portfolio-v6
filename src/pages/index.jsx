import React from "react"
import Layout from "../components/Layout/Layout"
import Scrollbar from "../components/Scrollbar/Scrollbar"
import About from "../components/Sections/About/About"
import HomeProjects from "../components/Sections/HomeProjects/HomeProjects"
import Services from "../components/Sections/Services/Services"
import "../styles/Index/Index.css"

const Home = () => {
  return (
    <>
      <Layout title="Anthony Animba - Freelance Web Designer and Developer in London">
        <HomeProjects />
        <About />
        <Services />
        <Scrollbar />
      </Layout>
    </>
  )
}

export default Home
