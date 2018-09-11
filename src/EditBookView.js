import React from 'react'

class EditBookView extends React.Component {
  constructor (props) {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit (updatedBookInfo) {
    let updatedBook = this.props.book
    updatedBookInfo(updatedBook)
  }

  render (books) {
    let { book } = this.props
    return (
      <div>
        <input type='text' value={book.title} onChange={event => {
          this.props.updateBook(book.id, 'title', event.target.value)
        }} />
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    )
  }
}

export default EditBookView
