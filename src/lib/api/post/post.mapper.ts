import { Nullable } from '@/lib/common/types'
import { formatDate } from '../common/date'
import { ErrorResponse } from '../common/error'

/**
 * Expected Post Data from API
 */
export type PostData = {
  id: string
  title: string
  updatedAt: string
}

export type PostResponse = {
  data: PostData[]
  errors: ErrorResponse[]
}

export type PostByIdData = {
  id: string
  title: string
  content: string
  updatedAt: string
}

export type PostByIdResponse = {
  data: Nullable<PostByIdData>
  errors: ErrorResponse[]
}
/**
 * Post type to be used in the app
 */

export type Post = {
  id: string
  title: string
  updatedAt: string
}

export function mapPost(post: PostData): Post {
  return {
    id: post.id,
    title: post.title,
    updatedAt: formatDate(post.updatedAt),
  }
}

export type PostById = {
  id: string
  title: string
  content: string
  updatedAt: string
}

export function mapPostById(post: Nullable<PostByIdData>): Nullable<PostById> {
  if (!post) {
    return null
  }

  return {
    id: post.id,
    title: post.title,
    content: post.content,
    updatedAt: formatDate(post.updatedAt),
  }
}
