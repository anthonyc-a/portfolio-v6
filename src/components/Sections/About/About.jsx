import React from "react"
import SocialIcons from "../Socials/SocialIcons"
import Description from "../Title/Description"
import Title from "../Title/Title"

const About = () => {
  return (
    <section>
      <div className="title-contain">
        <Title title="about" />
        <Description description="A bit about me" />
      </div>
      <div className="about">
        <div className="about-inner">
          <p>
            I’m a freelance web designer and developer with 5+ years experience
            in HTML5, CSS3 and Javascript ES5+.
            <br />
            <br />
            I currently use web frameworks such as Gatsby JS and Next JS (React)
            to generate sites and interfaces.
            <br />
            <br />
            The majority of my time is spent designing and building fast,
            responsive websites for small and medium sized businesses. I focus
            on clean design and robust code to improve visitor conversion and
            customer retention.
          </p>
        </div>
        <SocialIcons />
      </div>
    </section>
  )
}

export default About
