import React from 'react';

interface BookProps {
  width: string;
  height: string;
  backgroundColor: string;
}

const Book: React.FC<BookProps> = ({ width, height, backgroundColor }) => {
  const defaultStyle: React.CSSProperties = {
    height: height,
    width: width,
    backgroundColor: backgroundColor,
  }

  return <div style={defaultStyle} className="book" />
}

export default Book;
