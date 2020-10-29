export type Post = {
  id: string
  title: string
  content?: string
  commentIds?: string[]
}
export const posts: Post[] = [
  { id: 'POST_1', title: 'Travel ban', content: 'Travel is not allowed because of COVID-19' },
  { id: 'POST_2', title: 'From zero to hero GraphQL in 60 minutes', content: 'Absolutely that is the truth', commentIds: ['COMMENT_1', 'COMMENT_2'] },
  { id: 'POST_3', title: 'WIP GraphQL resolver'},
  { id: 'POST_4', title: 'Your feedback on GraphQL', commentIds: ['COMMENT_3'] },
]

export type Comment = {
  id: string
  content: string | null
  authorId: string
}
export const comments: Comment[] = [
  { id: 'COMMENT_1', content: 'I want to flight again :/', authorId: 'USER_1' },
  { id: 'COMMENT_2', content: 'That is awesome', authorId: 'USER_2' },
  { id: 'COMMENT_3', content: 'Amazing', authorId: 'USER_3' },
]

export type User = {
  id: string
  name: string
}
export const users: User[] = [
  { id: 'USER_1', name: 'John Does' },
  { id: 'USER_2', name: 'Eric' },
  { id: 'USER_3', name: 'Bobby' },
]
