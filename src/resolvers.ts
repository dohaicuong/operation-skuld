import { Context } from "./index";

export default {
  Query: {
    getPosts: (_root: any, { id }: any, ctx: Context) => {
      return id
        ? ctx.posts.filter(post => post.id === id)
        : ctx.posts
    },
  },
  Mutation: {
    createPost: (_root: any, { title, content }: any, ctx: Context) => {
      const newPost = { id: `POST_${ctx.posts.length + 1}` , title, content }
      ctx.posts.push(newPost)
      return newPost
    },
  }
}