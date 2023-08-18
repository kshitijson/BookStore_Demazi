const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Book {
    isbn: String!
    title: String!
    author: String!
    price: Float!
  }

  type Query {
    getBookByISBN(isbn: String!): Book
    getAllBooks: [Book!]!
    getBooksByTitle(title: String!): [Book!]!
    getBooksByAuthor(author: String!): [Book!]!
  }

  type Mutation {
    addBook(title: String!, author: String!, isbn: String!, price: Float!): Book
    updateBook(isbn: String!, title: String, author: String, price: Float): Book
    deleteBook(isbn: String!): Boolean
  }
`;

module.exports = typeDefs;
