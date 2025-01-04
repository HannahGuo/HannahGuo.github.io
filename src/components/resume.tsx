import * as React from "react"
import "../styles/resume.css"
import { OutboundLink } from "gatsby-plugin-google-gtag"

export const Resume = () => (
	<OutboundLink target="_blank" href="/HannahGuoResume.pdf">
		<div id="resume">
			<div>My Resume</div>
		</div>
	</OutboundLink>
)
