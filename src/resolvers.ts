import { Context } from "./index"
import { Resolvers } from './generated/types'

const resolvers: Resolvers = {
  Query: {
    getPosts: (_root, _args, ctx) => {
      return ctx.posts
    },
  },
  Mutation: {
    createPost: (_root: any, { title, content }: any, ctx: Context) => {
      const newPost = { id: `POST_${ctx.posts.length + 1}` , title, content }
      ctx.posts.push(newPost)
      return newPost
    },
  },
  Post: {
    uppercasedTitle: (root: any) => {
      return root.title.toUpperCase()
    },
    comments: (root: any, _args: any, ctx: Context) => {
      const commentIds = ctx.posts.find(post => post.id === root.id)?.commentIds
      const comments = ctx.comments.filter(comment => commentIds?.includes(comment.id))
      return comments
    }
  },
  Comment: {
    author: (root: any, _args: any, ctx: Context) => {
      const authorId = ctx.comments.find(comment => comment.id === root.id)?.authorId
      return ctx.users.find(user => user.id === authorId) || null
    }
  }
}
export default resolvers