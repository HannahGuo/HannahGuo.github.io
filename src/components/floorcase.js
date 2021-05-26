import * as React from "react"
import "../styles/floorcase.css"
import FloorShelfTop from "./floorshelf-top"
import FloorShelfBot from "./floorshelf-bot"

const FloorCase = () => (
    <div id="floorcase">
        <FloorShelfTop></FloorShelfTop>
        <FloorShelfBot></FloorShelfBot>
    </div>
)

export default FloorCase