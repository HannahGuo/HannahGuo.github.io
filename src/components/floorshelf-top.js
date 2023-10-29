import * as React from "react"
import "../styles/floorshelf.css"
import IconCircle from "./iconcircle"

const FloorShelfTop = () => (
  <div className="floorshelf">
    <div>
      <IconCircle
        color="white"
        icon="githubIcon"
        tilt="-26"
        link="https://github.com/HannahGuo"
      ></IconCircle>
      <IconCircle
        color="#01579B"
        icon="devpostIcon"
        tilt="25"
        link="https://devpost.com/HannahGuo"
      ></IconCircle>
      <IconCircle
        color="#0076B4"
        icon="linkedinIcon"
        tilt="-7"
        link="https://www.linkedin.com/in/hannah-guo/"
      ></IconCircle>
      <IconCircle
        color="white"
        icon="flickrIcon"
        tilt="13"
        link="https://www.flickr.com/photos/hannah8785/"
      ></IconCircle>
    </div>
  </div>
)

export default FloorShelfTop
