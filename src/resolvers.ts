import { Context } from "./index";

export default {
  Query: {
    getPosts: (_root: any, { id }: any, ctx: Context) => {
      return id
        ? ctx.posts.filter(post => post.id === id)
        : ctx.posts
    },
  }
}