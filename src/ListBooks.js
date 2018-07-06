import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Shelf from './Shelf'

class ListBooks extends Component {
  state = {
    query: ''
  }
  updateQuery = (query) => {
    this.setState(() => ({
      query: query.trim()
    }))
  }
  clearQuery = () => {
    this.updateQuery('')
  }
  render() {
    const { query } = this.state
    const { books, onUpdateCategory, onClearSearch } = this.props

    return (
      <div className='list-books'>
        <div className="list-books-title">
            <h1>MyReads</h1>
        </div>
        <Link
            to='/search'
            className='open-search'
            onClick={onClearSearch}
          >Search Book</Link>
        <div className="list-books-content">
          <div>
            {books.length > 0 &&
              <Shelf books={books} onUpdateCategory={onUpdateCategory} shelfName="Currently Reading" shelf="currentlyReading" />
            }
            {books.length > 0 &&
              <Shelf books={books} onUpdateCategory={onUpdateCategory} shelfName="Want to Read" shelf="wantToRead" />
            }
            {books.length > 0 &&
              <Shelf books={books} onUpdateCategory={onUpdateCategory} shelfName="Read" shelf="read" />
            }
          </div>
        </div>    
      </div>
    )
  }
}

export default ListBooks