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

  // updateBook(bookId, field, value) {

  // }

  render () {
    return (
      <div className='Books'>
        {(this.state.books.map((book, idx) => <BookView key={idx} book={book} />))}
      </div>
    )
  }
}

export default App
