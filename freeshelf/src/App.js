import React, { Component } from 'react'
import './App.css'
import books from './books.json'
import BookView from './BookView'

class App extends Component {
  constructor () {
    super()
    this.state = {
      books: books,
      isHidden: true
    }
  }
  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  render () {
    return (
      <div className='Books'>
        {(this.state.books.map((book, idx) => <BookView book={book} />))}
        {/* <button onClick={this.toggleHidden.bind(this)} >
        Click to show modal
        </button>
        {!this.state.isHidden && <BookView />} */}
      </div>
    )
  }
}

export default App
