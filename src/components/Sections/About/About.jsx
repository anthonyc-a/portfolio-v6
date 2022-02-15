import React from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import EmailBtn from "../EmailBtn/EmailBtn"
import SocialIcons from "../Socials/SocialIcons"
import Description from "../Title/Description"
import Title from "../Title/Title"

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 1,
  })
  const animation = useAnimation()

  React.useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: "0%",
        transition: {
          ease: [0.51, 0.92, 0.24, 1],
          duration: 0.6,
          delay: 0.6,
        },
      })
    }

    if (!inView) {
      animation.start({
        opacity: 0,
        y: "100%",
      })
    }
  }, [inView])

  return (
    <section>
      <div className="title-contain">
        <Title title="about" />
        <Description description="A bit about me" />
      </div>
      <div className="about">
        <div className="about-intro" ref={ref}>
          <motion.h3 animate={animation}>HELLO</motion.h3>
        </div>
        <div className="about-inner">
          <p>
            I’m a freelance designer and web developer with 5+ years experience
            in HTML5, CSS3 and Javascript ES5+.
            <br />
            <br />
            I currently use web frameworks such as Gatsby JS and Next JS (React)
            to generate sites and interfaces.
            <br />
            <br />
            Most of my time is spent designing and building fast,
            responsive websites for small to medium sized businesses. I focus
            on clean design and robust code to improve visitor conversion and
            customer retention.
          </p>
          <SocialIcons />
        </div>
        <div className="about-contact">
          <EmailBtn />
        </div>
      </div>
    </section>
  )
}

export default About
