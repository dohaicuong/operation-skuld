import { gql } from 'apollo-server'

export default gql`
  type Query {
    hello: World
  }

  type World {
    id: ID!
    name: String!
  }
`