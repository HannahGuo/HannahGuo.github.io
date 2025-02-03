import * as React from "react"
import SVGMe from "../images/undraw_programmer_imem.svg"
import "../styles/poster.css"

const Poster = () => (
	<div id="poster">
		<div>
			<div className="posterpin" />
			<div className="posterpin" />
		</div>
		<img
			src={SVGMe}
			alt="Programmer that happens to look like me"
		/>
		<span id="myName">Hannah Guo</span>
		<span id="myTitle">
			🛠️ Creator of This Site <br /> 🧋 Daily Iced Latte Drinker <br />
			🦦 Otter Emoji Enjoyer <br />
		</span>
	</div>
)

export default Poster
