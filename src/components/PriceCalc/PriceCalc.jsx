import React from "react"

const PriceCalc = ({ calcOpen, setCalcOpen }) => {
  const [logoDesign, setLogoDesign] = React.useState(false)
  const [webDesign, setWebDesign] = React.useState(false)
  const [development, setDevelopment] = React.useState(false)

  const [logoCost, setLogoCost] = React.useState(0)
  const [webDesignCost, setWebDesignCost] = React.useState(0)
  const [developmentCost, setDevelopmentCost] = React.useState(0)

  return (
    <div className={calcOpen ? "price-calc visible" : "price-calc"}>
      <div
        className="price-calc-overlay"
        onClick={() => {
          setCalcOpen(false)
        }}
      ></div>
      <div
        className={calcOpen ? "price-calc-inner visible" : "price-calc-inner"}
      >
        <div className="price-calc-content">
          <div className="price-calc-upper">
            <div className="price-calc-title">
              <div className="price-calc-title-contain">
                <h3 className={calcOpen ? "title visible" : "title"}>
                  Calculate your price
                </h3>
              </div>

              <p className={calcOpen ? "visible" : ""}>
                A quick project estimate
              </p>
            </div>
          </div>
          <div
            className={calcOpen ? "price-calc-main visible" : "price-calc-main"}
          >
            <ul className="price-calc-select">
              <li
                onClick={() => {
                  setLogoDesign(!logoDesign)
                  logoDesign ? setLogoCost(0) : setLogoCost(150)
                }}
              >
                Logo Design{" "}
                <div className={logoDesign ? "check active" : "check"}></div>
              </li>
              <li
                onClick={() => {
                  setWebDesign(!webDesign)
                  webDesign ? setWebDesignCost(0) : setWebDesignCost(400)
                }}
              >
                Web Design{" "}
                <div className={webDesign ? "check active" : "check"}></div>
              </li>
              <li
                onClick={() => {
                  setDevelopment(!development)
                  development ? setDevelopmentCost(0) : setDevelopmentCost(300)
                }}
              >
                Development{" "}
                <div className={development ? "check active" : "check"}></div>
              </li>
            </ul>
            <div className="price-calc-details">
              {logoDesign && (
                <div
                  className="details-select"
                  style={{ display: webDesign && "none" }}
                >
                  <label for="logo-iterations">Logo iterations:</label>
                  <select
                    name="logo-iterations"
                    onChange={e => setLogoCost(Number(e.target.value))}
                    value={logoCost}
                  >
                    <option value={150}>2</option>
                    <option value={200}>3</option>
                    <option value={250}>4</option>
                  </select>
                </div>
              )}

              {webDesign && (
                <div className="details-select">
                  <label for="cars">Design iterations:</label>
                  <select
                    name="cars"
                    onChange={e => setWebDesignCost(Number(e.target.value))}
                    value={webDesignCost}
                  >
                    <option value={400}>2</option>
                    <option value={450}>3</option>
                    <option value={500}>4</option>
                  </select>
                </div>
              )}

              {webDesign && (
                <div
                  className="details-select"
                  style={{ display: webDesign || (development && "none") }}
                >
                  <label for="cars">Number of pages:</label>
                  <select
                    name="cars"
                    onChange={e => setWebDesignCost(Number(e.target.value))}
                    value={webDesignCost}
                  >
                    <option value={400}>Homepage</option>
                    <option value={480}>Homepage + 1</option>
                    <option value={560}>Homepage + 2</option>
                    <option value={640}>Homepage + 3</option>
                  </select>
                </div>
              )}

              {development && (
                <div
                  className="details-select"
                  style={{ display: webDesign && "none" }}
                >
                  <label for="cars">Number of pages:</label>
                  <select
                    name="cars"
                    onChange={e => setDevelopmentCost(Number(e.target.value))}
                    value={developmentCost}
                  >
                    <option value={300}>Homepage</option>
                    <option value={350}>Homepage + 1</option>
                    <option value={400}>Homepage + 2</option>
                    <option value={450}>Homepage + 3</option>
                  </select>
                </div>
              )}
            </div>
          </div>
          <div className="price-calc-lower">
            <h3>Total cost:</h3>
            <h3>£{logoCost + webDesignCost + developmentCost}.00</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PriceCalc
