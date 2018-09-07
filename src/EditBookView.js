import React from 'react'

class EditBookView extends React.Component {
  render () {
    let { book } = this.props
    return (
      <div>
        <h2>Editing {book.title}</h2>
        <button className='edit-book' onClick={() => this.setState({editing: false})}>Edit Book</button>
      </div>
    )
  }
}

export default EditBookView
