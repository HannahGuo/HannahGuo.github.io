import { OutboundLink } from "gatsby-plugin-google-gtag"
import * as React from "react"
import "../styles/resume.css"

export const Resume = () => (
	<OutboundLink
		target="_blank"
		href="/HannahGuoResume.pdf"
		className="outboundLink"
	>
		<div id="resume">
			<div>My Resume</div>
		</div>
	</OutboundLink>
)
