import { Nullable } from '@/lib/common/types'
import { ENV_VARS, getEnv } from '../env'
import { ROUTES } from '../routes'
import { mapPost, mapPostById, Post, PostById, PostByIdResponse, PostData, PostResponse } from './post.mapper'

export async function getPosts(): Promise<Post[]> {
  try {
    const apiUrl = getEnv(ENV_VARS.API_URL)
    const route = ROUTES.POSTS

    const response = await fetch(`${apiUrl}${route}`)
    const json = (await response.json()) as PostResponse

    if (json.errors.length > 0) {
      return []
    }

    return json.data.map((post: PostData) => mapPost(post))
  } catch (err) {
    console.error('Error fetching posts:', err)
    return []
  }
}

export async function getPostById(id: string): Promise<Nullable<PostById>> {
  try {
    const apiUrl = getEnv(ENV_VARS.API_URL)
    const route = ROUTES.POST_BY_ID

    const response = await fetch(`${apiUrl}${route}/${id}`)
    const json = (await response.json()) as PostByIdResponse

    if (json.errors.length > 0) {
      return null
    }

    return mapPostById(json.data)
  } catch (err) {
    console.error('Error fetching posts:', err)
    return null
  }
}
