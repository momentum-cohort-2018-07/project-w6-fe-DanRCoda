import React, { Component } from 'react'
import './App.css'
import EditBookView from './EditBookView'

class BookView extends Component {
  constructor (props) {
    super()
    this.state = {
      showMore: false,
      editing: false
    }
  }

  renderMoreInfo (book) {
    return (
      <div className='more-info'>
        <button className='show-less' onClick={() => this.setState({showMore: false})}>Show less</button>
        <p><strong>URL:</strong> <a href={book.url}>{book.title}</a></p>
        <p><strong>Publisher:</strong> {book.publisher}</p>
        <p><strong>Publication Date:</strong> {book.publicationDate}</p>
        <p><strong>Full Description:</strong> {book.detailedDescription}</p>
        <button className='edit-book' onClick={() => this.setState({editing: true})}>Edit Book</button>
      </div>
    )
  }

  render () {
    let { book } = this.props
    console.log(this.props.book)
    // let bookId = this.props.book.id

    if (this.state.editing) {
      return <EditBookView book={book} updateBook={this.props.updateBook} updatedBookInfo={this.props.updatedBookInfo} />
    }

    let moreInfo

    if (this.state.showMore) {
      moreInfo = this.renderMoreInfo(book)
    } else {
      moreInfo = <button className='show-more' onClick={() => this.setState({showMore: true})}>Show more</button>
    }

    return (
      <div className='book-container'>
        <div className='book-info'>
          <img className='book-image' src={book.coverImageUrl} alt='Book Image' />
          <div className='book-title'>{book.title}</div>
          <div className='book-author'>{book.author}</div>
          <div className='short-description'>{book.shortDescription}</div>
          {moreInfo}
        </div>
      </div>
    )
  }
}

export default BookView
