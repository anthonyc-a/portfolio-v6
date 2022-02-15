import React from "react"
import Link from "gatsby-link"
import NavArrows from "./NavArrows/NavArrows"
import LinkArrow from "../Sections/Arrows/LinkArrow/LinkArrow"
import img1 from "../../../static/img/arch.webp"
import img2 from "../../../static/img/PAK.webp"
import img3 from "../../../static/img/carhartt.webp"
import Tags from "./Tags/Tags"

const Projects = ({ next, link }) => {
  const [count, setCount] = React.useState(0)

  return (
    <div className="projects">
      <div className="project-img-contain">
        <div
          className="project-img-inner"
          style={{
            transform: `translate(-${100 / (3 / count)}%, 0)`,
          }}
        >
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
        </div>
      </div>

      <div className="project-content">
        <div className="content-upper">
          <div className="upper-inner">
            <div className="project-title-contain">
              {count === 0 && <h3>archvizual.com</h3>}
              {count === 1 && <h3>Pak NFT Archive</h3>}
              {count === 2 && <h3>carhartt clone</h3>}
            </div>
            <NavArrows count={count} setCount={setCount} />
          </div>
          <div className="project-type">
            <div className="project-type-inner">
              {count === 0 && <span>design + code</span>}
              {count === 1 && <span>design + code</span>}
              {count === 2 && <span>code</span>}
            </div>
          </div>
          <div className="project-description">
            {count === 0 && (
              <p>
                A site redesign for the successful architect and 3D artist:
                Roman Vlasov.
              </p>
            )}
            {count === 1 && (
              <p>
                I’m currently designing a web based archive for Murat Pak, also
                known as 'Pak'.
              </p>
            )}
            {count === 2 && (
              <p>
                A functional clone of the ‘New arrivals' page on the Carhartt WIP site.
              </p>
            )}
          </div>
          <Tags />
        </div>

        <div className="content-lower">
          <div className="lower-inner">
            {count === 0 && (
              <a href="/">
                Launch site <LinkArrow />
              </a>
            )}
            {count === 1 && <span>In development</span>}
            {count === 2 && (
              <a href="/">
                Launch site <LinkArrow />
              </a>
            )}
            <Link to={link}>{next}</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
