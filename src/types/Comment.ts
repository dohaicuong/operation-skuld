import { extendType, objectType } from '@nexus/schema'

export const Comment = objectType({
  name: 'Comment',
  definition: t => {
    t.string('id', { nullable: false })
    t.string('content', { nullable: false })
  }
})

export const PostExtend = extendType({
  type: 'Post',
  definition: t => {
    t.list.field('comments', {
      type: 'Comment',
      resolve: (root, _args, ctx) => {
        const commentIds = ctx.posts.find(post => post.id === root.id)?.commentIds
        return ctx.comments.filter(comment => commentIds?.includes(comment.id)) as any
      }
    })
  }
})