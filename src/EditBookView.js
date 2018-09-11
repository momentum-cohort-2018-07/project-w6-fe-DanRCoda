import React from 'react'

class EditBookView extends React.Component {
  constructor (props) {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (event) {
    event.preventDefault()
    this.props.setEditing(false)
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
