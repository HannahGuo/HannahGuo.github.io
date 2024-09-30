import * as React from "react"
import "../styles/poster.css"
// import SVGMe from "../images/undraw_programmer_imem.svg"

const Poster = () => (
  <div id="poster">
    <div>
      <div className="posterpin"></div>
      <div className="posterpin"></div>
    </div>
    <img src={''} alt="Programmer that happens to look like me" />
    <span id="myName">Hannah Guo</span>
    <span>Creator of This Site, Daily Iced Latte Drinker, Doer of Things</span>
  </div>
)

export default Poster
