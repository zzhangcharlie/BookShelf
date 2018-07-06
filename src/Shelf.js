import React, { Component } from 'react'
import Book from './Book'

class Shelf extends Component {

      render() {

        const { books, onUpdateCategory, shelfName, shelf } = this.props
        
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{shelfName}</h2>
                <ol className="books-grid">
                    {books.map((book) => (
                        
                        book.shelf === shelf?
                        (<Book book={book} onUpdateCategory={onUpdateCategory} shelf={shelf} />
                        ): ''
                    ))}
                </ol>
          </div>
        )
      }
    }
    
    export default Shelf