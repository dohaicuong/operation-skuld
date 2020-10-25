import { ApolloServer } from 'apollo-server'

import typeDefs from './typeDefs'
import resolvers from './resolvers'

import { posts, comments, users, Post, Comment, User } from './db'

export type Context = {
  posts: Post[]
  comments: Comment[]
  users: User[]
}

new ApolloServer({
  typeDefs,
  resolvers,
  context: (): Context => {
    return { posts, comments, users }
  }
})
.listen({ port: 4000 })
.then(({ url }) => console.log(url))
