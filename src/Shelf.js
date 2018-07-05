import React, { Component } from 'react'
import Book from './Book'

class Shelf extends Component {
      updateCatergory = (updatedShelf, book) =>{
        if(updatedShelf !== book.shelf){
            console.log(updatedShelf)
        }
      }

      render() {

        const { books, onUpdateCategory, shelfName, shelf } = this.props
        
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{shelfName}</h2>
                <ol className="books-grid">
                    {books.map((book) => (
                        
                        book.shelf === shelf?
                        (<Book book={book} onUpdateCategory={onUpdateCategory} shelf={shelf} />
                        // <li key={book.id}>
                        // <div className="book">
                        //     <div className="book-top">
                        //     <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                        //     <div className="book-shelf-changer">
                        //         <select id={book.id} onChange={(e) => onUpdateCategory(book, e.target.value)}>
                        //         <option value="move" disabled>Move to...</option>
                        //         <option value="currentlyReading" selected={shelf==="currentlyReading"}>Currently Reading</option>
                        //         <option value="wantToRead" selected={shelf==="wantToRead"}>Want to Read</option>
                        //         <option value="read" selected={shelf==="read"}>Read</option>
                        //         <option value="none">None</option>
                        //         </select>
                        //     </div>
                        //     </div>
                        //     <div className="book-title">{book.title}</div>
                        //     {book.authors.map((author) => (
                        //         <div className="book-authors" key={author}>{author}</div>
                        //     ))}                      
                        // </div>
                        // </li>)
                        ): ''
                    ))}
                </ol>
          </div>
        )
      }
    }
    
    export default Shelf