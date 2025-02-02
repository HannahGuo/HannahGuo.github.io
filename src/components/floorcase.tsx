import { OutboundLink } from "gatsby-plugin-google-gtag"
import * as React from "react"
import WebringIcon from "../images/sewebring.svg"
import "../styles/floorcase.css"
import FloorShelfBot from "./floorshelf-bot"
import FloorShelfTop from "./floorshelf-top"

const FloorCase = () => (
	<div id="floorcase">
		<FloorShelfTop />
		<FloorShelfBot />
		<div id="se-webring-logo">
			<OutboundLink
				target="_blank"
				href="https://se-webring.xyz/"
			>
				<img
					src={WebringIcon}
					alt="SE Webring Icon"
				></img>
			</OutboundLink>
		</div>
	</div>
)

export default FloorCase
