import * as React from "react"
import Book from "../components/book"
import "../styles/bookshelf.css"
import BoxCard from "./boxcard"

const Bookshelf = ({ books, boxCardPos, boxTheme, shelfWidth }) => {
  let shelfContent = []
  let index = 0
  let hasAddedBox = false

  while (index < books.length) {
    if (index === boxCardPos && !hasAddedBox) {
      shelfContent.push(<BoxCard key={boxTheme} boxTheme={boxTheme}></BoxCard>)
      hasAddedBox = true
      continue
    } else {
      shelfContent.push(
        <Book
          key={index}
          width={books[index].width}
          height={books[index].height}
          backgroundColor={books[index].backgroundColor}
        ></Book>
      )
    }
    index++
  }

  return (
    <>
      <div className="bookshelf" style={{ width: shelfWidth }}>
        <div className="books">{shelfContent}</div>
        <div className="shelf"></div>
      </div>
    </>
  )
}

export default Bookshelf
