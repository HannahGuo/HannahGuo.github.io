import * as React from "react"
import "../styles/floorshelf.css"
import Resume from "../components/resume"
import Emailbox from "./emailbox"

const FloorShelfBot = () => (
  <div id="flootshelf-bot" className="floorshelf">
    <div>
      <Resume></Resume>
      <Emailbox></Emailbox>
    </div>
  </div>
)

export default FloorShelfBot
