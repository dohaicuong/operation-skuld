import { Context } from "./index";

export default {
  Query: {
    getPosts: (_root: any, _args: any, ctx: Context) => {
      return ctx.posts
    },
    getPost: (_root: any, { id }: any, ctx: Context) => {
      return ctx.posts.find(post => post.id === id)
    }
  },
  Mutation: {
    createPost: (_root: any, { title, content }: any, ctx: Context) => {
      const newPost = { id: `POST_${ctx.posts.length + 1}` , title, content }
      ctx.posts.push(newPost)
      return newPost
    },
  }
}