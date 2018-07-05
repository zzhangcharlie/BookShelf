import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" onChange={(e) => onSearchBook(e.target.value)} placeholder="Search by title or author"/>

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