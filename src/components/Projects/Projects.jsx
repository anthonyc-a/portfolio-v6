import React from "react"
import Link from "gatsby-link"
import NavArrows from "./NavArrows/NavArrows"
import LinkArrow from "../Sections/Arrows/LinkArrow/LinkArrow"
import img1 from "../../../static/img/arch.webp"
import img2 from "../../../static/img/PAK.webp"
import img3 from "../../../static/img/carhartt.webp"
import Tags from "./Tags/Tags"

const Projects = ({ next, link, description, tags }) => {
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
        <div className="project-nav">
          <div
            className="project-nav-control"
            onClick={() => {
              count <= 0 ? setCount(count) : setCount(count - 1)
            }}
          ></div>
          <div
            className="project-nav-control"
            onClick={() => {
              count >= 2 ? setCount(count) : setCount(count + 1)
            }}
          ></div>
        </div>
      </div>

      <div className="project-content">
        <div className="content-upper">
          <div
            className={
              description === false ? "upper-inner" : "upper-inner row"
            }
          >
            <div className="project-title-contain">
              {count === 0 && <h3>Archvizual.com</h3>}
              {count === 1 && <h3>Pak NFT Archive</h3>}
              {count === 2 && <h3>Carhartt Clone</h3>}
            </div>
            <NavArrows
              count={count}
              setCount={setCount}
              description={description}
            />
          </div>
          <div
            className={tags === false ? "project-type stretch" : "project-type"}
          >
            <div className="project-type-inner">
              {count === 0 && <span>design + code</span>}
              {count === 1 && <span>design + code</span>}
              {count === 2 && <span>code</span>}
            </div>
          </div>
          {description === false ? null : (
            <div className="project-description">
              {count === 0 && (
                <p>
                  A site redesign for the successful architect and 3D artist:
                  Roman Vlasov.
                </p>
              )}
              {count === 1 && (
                <p>
                  I???m currently designing a web based archive for Murat Pak,
                  also known as 'Pak'.
                </p>
              )}
              {count === 2 && (
                <p>
                  A functional clone of the ???New arrivals' page on the Carhartt
                  WIP site.
                </p>
              )}
            </div>
          )}
          {tags === false ? null : (
            <>
              <Tags />
            </>
          )}
        </div>

        <div className="content-lower">
          <div className="lower-inner">
            {count === 0 && (
              <a href="/">
                Launch site <LinkArrow />
              </a>
            )}
            {count === 1 && (
              <span>
                In development <div className="load-icon"></div>
              </span>
            )}
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
