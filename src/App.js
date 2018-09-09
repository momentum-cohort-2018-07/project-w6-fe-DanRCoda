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
  }

  componentDidMount () {
    request.get('http://localhost:4000/books')
      .then((res) => {
        this.setState({
          books: res.body
        })
      })
  }

  updateBookInfo () {
    request.post('http://localhost:4000/books')
      .then(res => {
        if (!res.ok) {
          this.setState({error: true})
        }
      })
  }

  updateBook (bookId, field, value) {
    const book = this.state.books
    book.editing[value] = field
    this.setState({
      books: this.state.editing
    })
    this.updateBookInfo()
  }

  render () {
    return (
      <div className='Books'>
        {(this.state.books.map((book, idx) => <BookView key={idx} book={book} />))}
      </div>
    )
  }
}

export default App
