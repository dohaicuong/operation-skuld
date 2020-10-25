import { gql } from 'apollo-server'

export default gql`
  type Query {
    getPosts: [Post!]
  }

  type Post {
    id: ID!
    title: String!
    content: String
    comments: [Comment!]
  }

  type Comment {
    id: ID!
    author: User!
    content: String!
  }

  type User {
    id: ID!
    name: String!
  }
`