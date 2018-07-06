import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Debounce  } from 'react-throttle'
import Book from './Book'
//import serializeForm from 'form-serialize'

class SearchBook extends Component {
  
  render() {
    const { books, onUpdateCategory, onSearchBook } = this.props

    return (
        <div className="search-books">
            <div className="search-books-bar">
              <Link to='/' className="close-search">Search Book</Link>
              
              <div className="search-books-input-wrapper">
                <Debounce  time="800" handler="onChange">
                    <input type="text" onChange={(e) => onSearchBook(e.target.value)} placeholder="Search by title or author"/>
                </Debounce >
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {books.map((book) => (
                    <Book book={book} onUpdateCategory={onUpdateCategory} shelf={book.shelf} />       
                ))}
              </ol>
            </div>
        </div>      
    )
  }
}

export default SearchBook