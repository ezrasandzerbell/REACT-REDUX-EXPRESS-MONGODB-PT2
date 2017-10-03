"use strict"
import axios from 'axios';

// Get books
export function getBooks() {
  return function(dispatch){
      axios.get("/books")
        .then(function(response){
          dispatch({type:"GET_BOOKS", payload:response.data})
        })
        .catch(function(err){
          dispatch({type:"GET_BOOKS_REJECTED", payload:err})
        })
    }
  }

export function postBooks(book) {
  return function(dispatch){
    axios.post("/books", book)
      .then(function(response){
        dispatch({type:"POST_BOOK", payload:response.data})
      })
      .catch(function(err){
        dispatch({type:"POST_BOOK_REJECTED", payload:"there was an error while posting a new book"})
      })
  }
}
// OLD CODE:
// return {
//   type:"POST_BOOKS",
//   payload: book
// }


export function deleteBooks(id){
  return {
    type:"DELETE_BOOK",
    payload: id
  }
}

export function updateBooks(book){
  return {
    type:"UPDATE_BOOK",
    payload: book
  }
}

// Delete books

// Update books