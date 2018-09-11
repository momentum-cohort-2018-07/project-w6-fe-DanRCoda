import React, { Component } from 'react'
import './App.css'
import BookView from './BookView'
import request from 'superagent'

class App extends Component {
  constructor () {
    super()
    this.state = {
      books: []
    }
    this.updateBook = this.updateBook.bind(this)
    this.updateBookInAPI = this.updateBookInAPI.bind(this)
  }

  componentDidMount () {
    request.get('http://localhost:4000/books')
      .then((res) => {
        this.setState({
          books: res.body
        })
      })
  }

  updateBookInAPI (book) {
    let bookID = book.id
    request.put(`http://localhost:4000/books/${bookID}`)
      .send(book).end()
  }

  updateBook (bookId, field, value) {
    console.log(this.state.editing)
    this.setState(state => {
      let book = this.state.books.find(book => book.id === bookId)
      book[field] = value
      this.updateBookInAPI(book)
      return {
        books: state.books
      }
    })
  }

  render () {
    return (
      <div className='Books'>
        {(this.state.books.map((book, idx) => <BookView key={idx} book={book} updateBook={this.updateBook} updatedBookInfo={this.updatedBookInfo} />))}
      </div>
    )
  }
}
export default App
