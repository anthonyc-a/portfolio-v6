import React from "react"
import Description from "../Title/Description"
import Title from "../Title/Title"
import ServicesGrid from "./ServicesGrid/ServicesGrid"

const Services = () => {
  return (
    <section>
      <div className="title-contain">
        <Title title="my services" />
        <Description description="What I can offer" />
      </div>
      <div className="services">
        <div className="services-inner">
          <ServicesGrid />
        </div>
      </div>
    </section>
  )
}

export default Services
