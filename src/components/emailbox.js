import * as React from "react"
import "../styles/emailbox.css"
import MailIcon from "../../public/images/mailIcon.png";
import { OutboundLink } from "gatsby-plugin-google-gtag"

const Emailbox = () => (
    <div id="emailbox">
        <div id="emailbox-body">
            <div id="emailbox-slot"></div>
            <OutboundLink target="_blank" rel="noreferrer" href="https://mailhide.io/e/tXYU7XHq">
                <div id="emailbox-center">
                        <img src={MailIcon} alt="E-mail Icon"></img>
                </div>
            </OutboundLink>
        </div>
        <div id="emailbox-feet">
            <div className="emailbox-foot"></div>
            <div className="emailbox-foot"></div>
        </div>
    </div>
)

export default Emailbox