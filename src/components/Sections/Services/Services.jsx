import React from "react"
import PriceCalc from "../../PriceCalc/PriceCalc"
import Description from "../Title/Description"
import Title from "../Title/Title"
import ServicesGrid from "./ServicesGrid/ServicesGrid"

const Services = () => {
  const [calcOpen, setCalcOpen] = React.useState(false)

  return (
    <section>
      <div className="title-contain">
        <Title title="my services" />
        <Description description="What I can offer" />
      </div>
      <div className="services">
        <div className="services-inner">
          <ServicesGrid />
          <div className="services-aside">
            <div
              className="pricing-btn"
              onClick={() => {
                setCalcOpen(true)
              }}
            >
              price calculator
            </div>
            <PriceCalc calcOpen={calcOpen} setCalcOpen={setCalcOpen} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
