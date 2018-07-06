import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import { Route } from 'react-router-dom'
import SearchBook from './SearchBook'

class BooksApp extends React.Component {
  state = {
    books : [],
    searchResult: [],
  }

  async componentDidMount() {
    const books = await BooksAPI.getAll()
    this.setState({ books })
  }

  updateCategory = (oldBook, shelf) => {
    BooksAPI.update(oldBook, shelf)
      .then((books) => {
        this.setState((currentState) => ({
          books: currentState.books.map((book) => {
            if(book.id === oldBook.id){
              book.shelf = shelf
            }
            return book
          })
        }))
      })
  }

  addToCategory = (newBook, shelf) => {
    newBook.shelf = shelf
    BooksAPI.update(newBook, shelf)
      .then((books) => {
        this.setState((currentState) => ({
          books: currentState.books.concat([newBook])
        }))
      })
  }

  searchBook = (query) => {
    if(query === '') {
      this.setState((currentState) => ({
        searchResult: []
      }))
      return
    }
    BooksAPI.search(query)
    .then((books) => {
      if(books.error === undefined){
        books = this.addShelfToResult(books)
      }
      else{
        books = []
      }
      this.setState((currentState) => ({
        searchResult: books
      }))
    })
  }

  addShelfToResult = (searchResult) => {
    let shelves = {}
    this.state.books.map((book) => {
      shelves[book.id] = book.shelf
    })
    searchResult.map((book) => {
      if(shelves[book.id] !== undefined && shelves[book.id] !== null){
        book.shelf = shelves[book.id]
      }
      else{
        book.shelf = 'none'
      }
      return book
    })
    return searchResult
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <ListBooks books={this.state.books} onUpdateCategory={this.updateCategory} 
          onClearSearch={() => {
            this.setState((currentState) => ({
              searchResult: []
            }))
          }}/>
        )} />
        <Route path='/search' render={({ history }) => (
          <SearchBook books={this.state.searchResult}
            onUpdateCategory={this.addToCategory}
            onSearchBook={(query) => {
              this.searchBook(query)
              //history.push('/')
            }}
          />
        )} />
      </div>
    )
  }
}

export default BooksApp
