const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    thoughts: [Thought]!
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    bookId: String
    author: [String]
    description: String
    title: String
    link: String
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
	saveBook(bookBody: BookInput!): User
	deleteBook(bookId: String!): User
  }
`;

module.exports = typeDefs;