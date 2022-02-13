import React from "react"
import Logo from "../Header/Logo/Logo"

const instaLink = "https://www.instagram.com/anthonya_design/"
const githubLink = "https://github.com/anthonyc-a"
const linkedLink = "https://www.linkedin.com/in/anthony-animba/"

const Footer = () => {
  return (
    <div className="footer">
      <Logo />
      <div className="footer-inner">
        <div className="footer-copyright">
          <p>© 2022</p>
        </div>
        <div className="footer-socials">
          <a href={instaLink} target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href={githubLink} target="_blank" rel="noreferrer">
            Github
          </a>
          <a href={linkedLink} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
        <div className="footer-description">
          <p>
            I design and build fast, responsive websites to ensure your business
            stands out.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
