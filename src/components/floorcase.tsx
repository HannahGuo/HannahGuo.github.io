import * as React from "react"
import "../styles/floorcase.css"
import FloorShelfTop from "./floorshelf-top"
import FloorShelfBot from "./floorshelf-bot"
import WebringIcon from "../images/sewebring.svg"
import { OutboundLink } from "gatsby-plugin-google-gtag"

const FloorCase = () => (
  <div id="floorcase">
    <FloorShelfTop></FloorShelfTop>
    <FloorShelfBot></FloorShelfBot>
    <div id="se-webring-logo">
      <OutboundLink
        target="_blank"
        rel="noreferrer"
        href="https://se-webring.xyz/"
      >
        <img src={WebringIcon} alt="SE Webring Icon"></img>
      </OutboundLink>
    </div>
  </div>
)

export default FloorCase
