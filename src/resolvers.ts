import { Context } from "./index";

export default {
  Query: {
    getPosts: (_root: any, _args: any, ctx: Context) => {
      return ctx.posts
    },
    getPost: (_root: any, { id }: any, ctx: Context) => {
      return ctx.posts.find(post => post.id === id)
    }
  }
}