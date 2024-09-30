import * as React from "react"
import "../styles/emailbox.css"
import { OutboundLink } from "gatsby-plugin-google-gtag"

export const Emailbox = () => (
  <div id="emailbox">
    <div id="emailbox-body">
      <div id="emailbox-slot"></div>
      <OutboundLink
        target="_blank"
        rel="noreferrer"
        href="https://mailhide.io/e/tXYU7XHq"
      >
        <div id="emailbox-center">
          <img src={''} alt="E-mail Icon"></img>
        </div>
      </OutboundLink>
    </div>
    <div id="emailbox-feet">
      <div className="emailbox-foot"></div>
      <div className="emailbox-foot"></div>
    </div>
  </div>
)