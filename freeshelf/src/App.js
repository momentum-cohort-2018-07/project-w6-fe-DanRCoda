import React, { Component } from 'react'
import './App.css'
import books from './books.json'
import BookView from './BookView'

class App extends Component {
  constructor () {
    super()
    this.state = {
      books: books
    }
  }

  render () {
    return (
      <div className='App'>
        {(this.state.books.map((book, idx) => <BookView book={book} />))}
      </div>
    )
  }
}

export default App
