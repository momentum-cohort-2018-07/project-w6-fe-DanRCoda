import React, { Component } from 'react'
import './App.css'

class BookView extends Component {
  constructor (props) {
    super()
  }

  render () {
    let { book } = this.props
    // let { toggleHidden } = this.isHidden
    return (
      <div className='book-container'>
        <div className='book-info'>
          <h1>{book.title}</h1>
          <h3>{book.author}</h3> <img src={book.coverImageUrl} />
          <p>{book.shortDescription}</p>
          <div className='more-info'>
            <p><strong>URL:</strong> <a href={book.url}>{book.url}</a></p>
            <p><strong>Publisher:</strong> {book.publisher}</p>
            <p><strong>Publication Date:</strong> {book.publicationDate}</p>
            <p><strong>Full Description:</strong> {book.detailedDescription}
            </p>
          </div>

        </div>
      </div>
    )
  }
}
export default BookView
