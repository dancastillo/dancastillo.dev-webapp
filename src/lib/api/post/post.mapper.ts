/**
 * Expected Post Data from API
 */
export type PostData = {
  id: string
  title: string
  date: string
  content: string
  tags: string[]
}

/**
 * Post type to be used in the app
 */
export type Post = {
  id: string
  title: string
  date: string
  content: string
  tags: string[]
}

export function mapPost(post: PostData): Post {
  return {
    id: post.id,
    title: post.title,
    date: post.date,
    content: post.content,
    tags: post.tags,
  }
}
