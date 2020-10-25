import { gql } from 'apollo-server'

export default gql`
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

  type Query {
    getPosts: [Post!]
    getPost(id: ID!): Post
  }

  type Mutation {
    createPost(title: String!, content: String): Post
  }  
`