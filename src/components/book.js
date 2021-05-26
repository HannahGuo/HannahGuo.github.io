import * as React from "react"

const Book = ({width, height, backgroundColor}) => {
    const defaultStyle = {
        height: height,
        width: width,
        backgroundColor: backgroundColor
    };

    return <div style={defaultStyle} className="book"></div>
}

export default Book