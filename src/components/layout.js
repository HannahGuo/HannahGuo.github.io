import * as React from "react"
import Floor from "./floor"
import FloorCase from "./floorcase"
import Poster from "./poster"
import "../styles/layout.css"
import Bookshelf from "./bookshelf"
import Plant from "./plant"

const Layout = () => {
  return (
    <div id="holder">
      <div id="room">
        <div id="right-room">
          <div id="right-room-shelf-col-left">
          <Bookshelf 
          shelfWidth="12em"
          books={
            [{
              width: "1.8em",
              height: "6.4em",
              backgroundColor: "#6F7F8C"
            }, 
            {
              width: "1.8em",
              height: "5em",
              backgroundColor: "#9F9069"
            }
          ]
          }
          boxCardPos={1}
          boxTheme="About Me"
          ></Bookshelf>
            <Bookshelf 
          shelfWidth="18em"
          books={
            [{
              width: "1.8em",
              height: "5.7em",
              backgroundColor: "#C3231F"
            }, 
            {
              width: "1.8em",
              height: "7.4em",
              backgroundColor: "#1E716C"
            },
            {
              width: "1.8em",
              height: "4.2em",
              backgroundColor: "#8D556E"
            },
            {
              width: "1.8em",
              height: "5.2em",
              backgroundColor: "#EA6B1F"
            }
          ]
          }
          boxCardPos={2}
          boxTheme="My Projects"
          ></Bookshelf>
        </div>
        <div id="right-room-shelf-col-right">
        <Bookshelf
          shelfWidth="18em" 
          books={
            [{
              width: "1.8em",
              height: "5.5em",
              backgroundColor: "#F26154"
            }, 
            {
              width: "1.8em",
              height: "4em",
              backgroundColor: "#C2B69C"
            },
            {
              width: "1.8em",
              height: "6em",
              backgroundColor: "#60A6D7"
            },
            {
              width: "1.8em",
              height: "6.8em",
              backgroundColor: "#9C6FB2"
            }
          ]
          }
          boxCardPos={2}
          boxTheme="My Tech Stack"
          ></Bookshelf>
        <Bookshelf 
          shelfWidth="15em"
          books={
            [{
              width: "1.8em",
              height: "6.7em",
              backgroundColor: "#B75932"
            }, 
            {
              width: "1.8em",
              height: "4.2em",
              backgroundColor: "#7897C1"
            },
            {
              width: "1.8em",
              height: "5em",
              backgroundColor: "#939667"
            }
          ]
          }
          boxCardPos={2}
          boxTheme="Site Details"
          ></Bookshelf>

        </div>
        </div>
        <div id="left-room">
          <Poster></Poster>
          <FloorCase></FloorCase>
        </div>
      </div>
      <Plant></Plant>
      <Floor></Floor>
    </div>
  )
}

export default Layout
