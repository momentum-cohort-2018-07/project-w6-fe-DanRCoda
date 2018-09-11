import React from 'react'

function updateField (obj, fieldName, value) {
  const newObj = Object.assign({}, obj)
  newObj[fieldName] = value
  return newObj
}

class EditBookView extends React.Component {
  constructor (props) {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleCancel = this.handleCancel.bind(this)

    this.state = {
      book: props.book
    }
  }

  updateBook (field, newValue) {
    const updatedBook = updateField(this.state.book, field, newValue)
    this.setState({
      book: updatedBook
    })
  }

  handleSubmit (event) {
    event.preventDefault()
    this.props.updateBook(this.state.book.id, 'title', this.state.book.title)
    this.props.setEditing(false)
  }

  handleCancel (event) {
    event.preventDefault()
    this.props.setEditing(false)
  }

  render (books) {
    let { book } = this.state
    return (
      <div>
        <input type='text' value={book.title} onChange={event => {
          this.updateBook('title', event.target.value)
        }} />
        <button onClick={this.handleSubmit}>Submit</button>
        <button onClick={this.handleCancel}>Cancel</button>
      </div>
    )
  }
}

export default EditBookView
