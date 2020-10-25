import { ApolloServer } from 'apollo-server'

import typeDefs from './typeDefs'
import resolvers from './resolvers'

new ApolloServer({
  typeDefs,
  resolvers,
})
.listen({ port: 4000 })
.then(({ url }) => console.log(url))