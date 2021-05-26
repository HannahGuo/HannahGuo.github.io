import * as React from "react"
import "../styles/iconcircle.css"
import { OutboundLink } from "gatsby-plugin-google-gtag"

const IconCircle = ({color, icon, tilt, link}) => {
    let defaultStyle = {
        backgroundColor: color,
        backgroundImage: `url("../images/${icon}.png")`,
        backgroundSize: "103%", // This is big because for some reason theres a border when on GH regular sized
        backgroundPosition: "center",
        transform: `rotate(${tilt}deg)`,
    };
    let hoveredStyle = {
        backgroundColor: color,
        backgroundImage: `url("../images/${icon}.png")`,
        backgroundSize: "103%", // This is big because for some reason theres a border when on GH regular sized
        backgroundPosition: "center",
        transform: `rotate(0deg)`,
    };

    const [currentStyle, setCurrentStyle] = React.useState(defaultStyle);

    function setDefaultStyle() {
        setCurrentStyle(defaultStyle)
    }

    function setHoveredStyle() {
        setCurrentStyle(hoveredStyle)
    }

    return (<OutboundLink href={`${link}`} target="_blank" rel="noopener noreferrer"><div style={currentStyle} 
        className="iconcircle" 
        role="button"
        tabIndex={0}
        
        aria-label="iconcircle"
        onMouseEnter={setHoveredStyle}
        onMouseLeave={setDefaultStyle}></div></OutboundLink>);
}

export default IconCircle