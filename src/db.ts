export type Post = {
  id: string
  title: string
  content?: string
  commentIds?: string[]
}
export const posts: Post[] = [
  { id: 'POST_1', title: 'Hello GraphQL', content: '...' },
  { id: 'POST_2', title: 'Hello GraphQL', content: '...', commentIds: ['COMMENT_1', 'COMMENT_2'] },
  { id: 'POST_3', title: 'Hello GraphQL', content: '...' },
  { id: 'POST_4', title: 'Hello GraphQL', commentIds: ['COMMENT_3'] },
]

export type Comment = {
  id: string
  content?: string
  authorId: string
}
export const comments: Comment[] = [
  { id: 'COMMENT_1', content: 'hahaha', authorId: 'USER_1' },
  { id: 'COMMENT_2', content: 'hahaha', authorId: 'USER_2' },
  { id: 'COMMENT_3', content: 'hahaha', authorId: 'USER_3' },
]

export type User = {
  id: string
  name: string
}
export const users: User[] = [
  { id: 'USER_1', name: 'name_1' },
  { id: 'USER_2', name: 'name_1' },
  { id: 'USER_3', name: 'name_1' },
]