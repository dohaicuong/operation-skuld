import { gql } from 'apollo-server'

export default gql`
  type Post {
    id: ID!
    title: String!
    content: String
    comments: [Comment!]
    uppercasedTitle: String
  }

  type Comment {
    id: ID!
    author: User
    content: String
  }

  type User {
    id: ID!
    name: String!
  }

  type Query {
    getPosts(id: ID): [Post!]
  }

  type Mutation {
    createPost(title: String!, content: String): Post
  }  
`