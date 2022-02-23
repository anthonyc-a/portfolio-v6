import React from "react"
import Link from "gatsby-link"
import SocialIcons from "../Socials/SocialIcons"

const Hero = () => {
  return (
    <section className="hero" style={{ marginTop: 0 }}>
      <div className="hero-contain">
        <div className="hero-inner">
          <div className="hero-inner-left">
            <div className="hero-title">
              <h1>Anthony Animba</h1>
            </div>
            <div className="hero-title-txt">
              <span>web designer — developer</span>
            </div>
            <Link to="/projects" className="work-btn">
              view work
            </Link>
          </div>
          <div className="hero-inner-right">
            <h4>Portfolio 2021/22</h4>
            <p>
              I design and build fast, responsive websites to ensure your
              business stands out.
            </p>
            <SocialIcons />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
