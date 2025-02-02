import { OutboundLink } from "gatsby-plugin-google-gtag"
import * as React from "react"
import EmailIcon from "../images/mailIcon.png"
import "../styles/emailbox.css"

export const Emailbox = () => (
	<div id="emailbox">
		<div id="emailbox-body">
			<div id="emailbox-slot" />
			<OutboundLink
				target="_blank"
				href="https://mailhide.io/e/tXYU7XHq"
			>
				<div id="emailbox-center">
					<img
						src={EmailIcon}
						alt="E-mail Icon"
					/>
				</div>
			</OutboundLink>
		</div>
		<div id="emailbox-feet">
			<div className="emailbox-foot" />
			<div className="emailbox-foot" />
		</div>
	</div>
)
