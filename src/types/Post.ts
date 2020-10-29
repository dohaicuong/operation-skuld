import { extendType, objectType, stringArg } from '@nexus/schema'

export const Post = objectType({
  name: 'Post',
  definition(t) {
    t.string('id', { nullable: false })
    t.string('title', { nullable: false })
    t.string('content')
    t.string('uppercasedTitle', {
      nullable: false,
      resolve: post => {
        return post.title.toLocaleUpperCase()
      }
    })
  },
})

export const PostQuery = extendType({
  type: 'Query',
  definition: t => {
    t.list.field('getPosts', {
      type: 'Post',
      args: {
        id: 'ID'
      },
      resolve: (_root, { id }, ctx) => {
        return id ? ctx.posts.filter(post => post.id === id) : ctx.posts
      }
    })
  }
})

export const PostMutation = extendType({
  type: 'Mutation',
  definition: t => {
    t.field('createPost', {
      type: 'Post',
      args: {
        title: stringArg({ required: true }),
        content: 'String',
      },
      resolve: (_root: any, { title, content }: any, ctx) => {
        const newPost = { id: `POST_${ctx.posts.length + 1}` , title, content }
        ctx.posts.push(newPost)
        return newPost
      },
    })
  }
})