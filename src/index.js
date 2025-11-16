import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { books } from './books.js'
import { Book } from './Book.js'

const BookList = () => {
  return (
    <>
    <h1>Amazon Book Best Seller</h1>
    <section className="bookList">
      {books.map((book, index) => {
        return <Book {...book} key={book.id} number={index+1} />
      })}
    </section>
    </>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList />)
