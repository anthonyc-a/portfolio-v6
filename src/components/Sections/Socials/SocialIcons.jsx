import React from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import SocialIcon from "./SocialIcon/SocialIcon"
import insta from "../../../../static/svg/instagram.svg"
import github from "../../../../static/svg/github.svg"
import linkedin from "../../../../static/svg/linkedin.svg"

const instaLink = "https://www.instagram.com/anthonya_design/"
const githubLink = "https://github.com/anthonyc-a"
const linkedLink = "https://www.linkedin.com/in/anthony-animba/"

const SocialIcons = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 1,
  })

  const animation = useAnimation()

  React.useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        transition: {
          ease: [0.51, 0.92, 0.24, 1],
          duration: 0.4,
        },
      })
    }

    if (!inView) {
      animation.start({
        y: "101%",
      })
    }
  }, [inView])

  return (
    <motion.div className="social-icons" ref={ref}>
      <SocialIcon img={insta} link={instaLink} animation={animation} />
      <SocialIcon img={github} link={githubLink} animation={animation} />
      <SocialIcon img={linkedin} link={linkedLink} animation={animation} />
    </motion.div>
  )
}

export default SocialIcons
