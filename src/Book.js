import React, { Component } from 'react'

class Book extends Component {
    //   updateCatergory = (updatedShelf, book) =>{
    //     if(updatedShelf !== book.shelf){
    //         console.log(updatedShelf)
    //     }
    //   }

      render() {

        const { book, onUpdateCategory, shelf } = this.props
        
        return (
            <li key={book.id}>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                            <div className="book-shelf-changer">
                                <select id={book.id} onChange={(e) => onUpdateCategory(book, e.target.value)}>
                                    <option value="move" disabled>Move to...</option>
                                    <option value="currentlyReading" selected={shelf==="currentlyReading"}>Currently Reading</option>
                                    <option value="wantToRead" selected={shelf==="wantToRead"}>Want to Read</option>
                                    <option value="read" selected={shelf==="read"}>Read</option>
                                    <option value="none" selected={shelf==="none"}>None</option>
                                </select>
                            </div>
                        </div>
                        <div className="book-title">{book.title}</div>
                        {book.authors !== undefined && 
                        book.authors.map((author) => (
                            <div className="book-authors" key={author}>{author}</div>
                        ))}                      
                </div>
            </li>
        )
      }
    }
    
    export default Book