import React from "react"
import Description from "../Title/Description"
import Title from "../Title/Title"
import art from "../../../../static/svg/art.svg"
import design from "../../../../static/svg/design.svg"
import development from "../../../../static/svg/development.svg"
import hosting from "../../../../static/svg/hosting.svg"

const Services = () => {
  return (
    <section>
      <div className="title-contain">
        <Title title="services" />
        <Description description="What I can offer" />
      </div>
      <div className="services">
        <div className="services-inner">
          <div className="services-item">
            <div className="services-header">
              <h3>Art Direction</h3>
              <img src={art} alt="Services Icon" />
            </div>
            <div className="services-txt">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
                voluptatem unde quaerat, aliquid dicta debitis.
              </p>
            </div>
          </div>
          <div className="services-item">
            <div className="services-header">
              <h3>Web Design</h3>
              <img src={design} alt="Services Icon" />
            </div>
            <div className="services-txt">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
                voluptatem unde quaerat, aliquid dicta debitis.
              </p>
            </div>
          </div>
          <div className="services-item">
            <div className="services-header">
              <h3>Development</h3>
              <img src={development} alt="Services Icon" />
            </div>
            <div className="services-txt">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
                voluptatem unde quaerat, aliquid dicta debitis.
              </p>
            </div>
          </div>
          <div className="services-item">
            <div className="services-header">
              <h3>Hosting</h3>
              <img src={hosting} alt="Services Icon" />
            </div>
            <div className="services-txt">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
                voluptatem unde quaerat, aliquid dicta debitis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
