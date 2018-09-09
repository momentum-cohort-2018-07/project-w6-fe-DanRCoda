import React from 'react'

class EditBookView extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      editField: true
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }
  handleChange () {
    this.setState({editField: true})
  }
  handleClick () {
    this.setState({books: this.state.value})
  }

  render (books) {
    let { book } = this.props
    return (
      <form>
        <textarea type='text' value={book.title} onChange={this.handleChange} />
        <button onClick={this.handleClick}>Submit</button>
      </form>
    )
  }
}

export default EditBookView
