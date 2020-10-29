import { ApolloServer } from 'apollo-server'

import { schema } from './schema'

new ApolloServer({
  schema
})
.listen({ port: 4000 })
.then(({ url }) => console.log(url))