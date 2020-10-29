import { createContext } from "vm";
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
  },
  Post: {
    captializedTitle: (root: any) => {
      return root.title.toUpperCase()
    },
    comments: (root: any, _args: any, ctx: Context) => {
      const commentIds = ctx.posts.find(post => post.id === root.id)?.commentIds
      return ctx.comments.filter(comment => commentIds?.includes(comment.id))
    }
  },
  Comment: {
    author: (root: any, _args: any, ctx: Context) => {
      const authorId = ctx.comments.find(comment => comment.id === root.id)?.authorId
      return ctx.users.find(user => user.id === authorId)
    }
  }
}