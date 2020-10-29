import { posts, comments, users, Post, Comment, User } from './db'

export type Context = {
  posts: Post[]
  comments: Comment[]
  users: User[]
}

export const createContext = (): Context => {
  return { posts, comments, users }
}