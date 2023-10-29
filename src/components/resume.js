import * as React from "react"
import "../styles/resume.css"
import { OutboundLink } from "gatsby-plugin-google-gtag"

const Resume = () => (
  <OutboundLink target="_blank" href="/HannahGuoResume.pdf">
    <div id="resume">
      <div>RESUME</div>
    </div>
  </OutboundLink>
)

export default Resume
