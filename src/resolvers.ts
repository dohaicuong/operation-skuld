export default {
  Query: {
    hello: (_root, _args, _ctx) => {
      return {
        id: '1',
        name: 'Earth',
      }
    }
  }
}