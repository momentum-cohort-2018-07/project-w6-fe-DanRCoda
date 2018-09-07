import React, { Component } from 'react'
import './App.css'

class BookView extends Component {
  constructor (props) {
    super()
  }

  render () {
    let { book } = this.props
    return (
      <div className='book-container'>
        <div className='book-info'>
          <h1>{book.title}</h1>
          <h3>{book.author}</h3>
          <p>{book.shortDescription}<img src={book.coverImageUrl} /></p>
          <div className='more-info'>
            <a href={book.url}>{book.url}</a>
            <p>Publisher: {book.publisher}</p>
            <p>Publication Date: {book.publicationDate}</p>
            <p>Full Description: {book.detailedDescription}
            </p>

          </div>

        </div>
      </div>
    )
  }
}
export default BookView
