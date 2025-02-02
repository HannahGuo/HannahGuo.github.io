import { OutboundLink } from "gatsby-plugin-google-gtag"
import * as React from "react"
import "../styles/iconcircle.css"

type IconString = "githubIcon" | "substackIcon" | "linkedinIcon" | "flickrIcon"

interface IconCircleProps {
	color: string
	icon: IconString
	tilt: number
	link: string
}

function determineIconCircleSize(icon: IconString) {
	switch (icon) {
		case "githubIcon":
			return "103%"
		case "substackIcon":
		case "linkedinIcon":
			return "86%"
		case "flickrIcon":
			return "103%"
		default:
			return "100%"
	}
}

const IconCircle: React.FC<IconCircleProps> = ({ color, icon, tilt, link }) => {
	let defaultStyle = {
		backgroundColor: color,
		backgroundImage: `url("../images/${icon}.png")`,
		backgroundSize: determineIconCircleSize(icon),
		backgroundPosition: "center",
		transform: `rotate(${tilt}deg)`,
	}
	let hoveredStyle = {
		backgroundColor: color,
		backgroundImage: `url("../images/${icon}.png")`,
		backgroundSize: determineIconCircleSize(icon),
		backgroundPosition: "center",
		transform: `rotate(0deg)`,
	}

	const [currentStyle, setCurrentStyle] = React.useState(defaultStyle)

	function setDefaultStyle() {
		setCurrentStyle(defaultStyle)
	}

	function setHoveredStyle() {
		setCurrentStyle(hoveredStyle)
	}

	return (
		<OutboundLink
			href={`${link}`}
			target="_blank"
		>
			<div
				style={currentStyle}
				className="iconcircle"
				role="button"
				tabIndex={0}
				aria-label="iconcircle"
				onMouseEnter={setHoveredStyle}
				onMouseLeave={setDefaultStyle}
			/>
		</OutboundLink>
	)
}

export default IconCircle
