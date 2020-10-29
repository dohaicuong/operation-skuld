import { extendType, objectType } from '@nexus/schema'

export const User = objectType({
  name: 'User',
  definition: t => {
    t.string('id', { nullable: false })
    t.string('name', { nullable: false })
  }
})

export const CommentExtend = extendType({
  type: 'Comment',
  definition: t => {
    t.field('author', {
      type: 'User',
      resolve: (root: any, _args: any, ctx) => {
        const authorId = ctx.comments.find(comment => comment.id === root.id)?.authorId
        return ctx.users.find(user => user.id === authorId) as any
      }
    })
  }
})