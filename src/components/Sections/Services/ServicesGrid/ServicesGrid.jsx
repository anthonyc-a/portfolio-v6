import React from "react"
import ServicesItem from "./ServicesItem/ServicesItem"
import art from "../../../../../static/svg/art.svg"
import design from "../../../../../static/svg/design.svg"
import development from "../../../../../static/svg/development.svg"
import hosting from "../../../../../static/svg/hosting.svg"

const hello =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore voluptatem unde quaerat, aliquid dicta debitis."

const ServicesGrid = () => {
  return (
    <div className="services-grid">
      <ServicesItem title="Branding" icon={art} description={hello} />
      <ServicesItem title="Web Design" icon={design} description={hello} />
      <ServicesItem
        title="Development"
        icon={development}
        description={hello}
      />
      <ServicesItem title="Hosting" icon={hosting} description={hello} />
    </div>
  )
}

export default ServicesGrid
