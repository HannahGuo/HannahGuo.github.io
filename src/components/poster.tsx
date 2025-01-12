import * as React from "react"
import SVGMe from "../images/undraw_programmer_imem.svg"
import "../styles/poster.css"

const Poster = () => (
	<div id="poster">
		<div>
			<div className="posterpin"></div>
			<div className="posterpin"></div>
		</div>
		<img src={SVGMe} alt="Programmer that happens to look like me" />
		<span id="myName">Hannah Guo</span>
		<span id="myTitle">
			🛠️ Creator of This Site <br /> 🧋 Daily Iced Latte Drinker <br /> 🧙
			Probably Side Questing
		</span>
	</div>
)

export default Poster
