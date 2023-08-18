import { gql } from '@apollo/client'

const ADD_BOOK = gql`
  mutation addBook($title: String!, $author: String!, $isbn: String!, $price: Float!) {
    addBook(title: $title, author: $author, isbn: $isbn, price: $price) {
      title
      author
      isbn
      price
    }
  }
`;

const UPDATE_BOOK = gql`
  mutation updateBook($title: String!, $author: String!, $isbn: String!, $price: Float!) {
    updateBook(title: $title, author: $author, isbn: $isbn, price: $price) {
      title
      author
      isbn
      price
    }
  }
`;

const READ_ALL_BOOK = gql`
  query getAllBooks{
    getAllBooks{
      title,
      author,
      isbn,
      price
    }
  }
`;

const READ_BOOK_ISBN = gql`
  query getBookByISBN($isbn: String!){
    getBookByISBN(isbn: $isbn){
      title,
      author,
      isbn,
      price
    }
  }
`;

const READ_BOOK_TITLE = gql`
  query getBooksByTitle($title: String!){
    getBooksByTitle(title: $title){
      title,
      author,
      isbn,
      price
    }
  }
`;

const READ_BOOK_AUTHOR = gql`
  query getBooksByAuthor($author: String!){
    getBooksByAuthor(author: $author){
      title,
      author,
      isbn,
      price
    }
  }
`;

const REMOVE_BOOK = gql`
  mutation deleteBook($isbn: String!) {
    deleteBook(isbn: $isbn) {
      isbn
    }
  }
`;

export { 
    ADD_BOOK,
    READ_ALL_BOOK,
    READ_BOOK_ISBN,
    READ_BOOK_AUTHOR,
    READ_BOOK_TITLE,
    REMOVE_BOOK,
    UPDATE_BOOK
}