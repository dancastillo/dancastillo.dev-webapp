import { ENV_VARS, getEnv } from '../env'
import { ROUTES } from '../routes'
import { mapPost, Post, PostData } from './post.mapper'
import path from 'node:path'
import { remark } from 'remark'
import html from 'remark-html'
import { readFile, readdir } from 'fs/promises'

const postDir = path.join(process.cwd(), 'src/posts')

export async function getPosts(): Promise<Post[]> {
  try {
    if (getEnv(ENV_VARS.LOCAL_DEVELOPMENT) === 'true') {
      const fileNames = await readdir(postDir)
      const posts = await Promise.all(
        fileNames.map(async (fileName): Promise<Post> => {
          const filePath = path.join(postDir, fileName)
          const fileContents = await readFile(filePath, 'utf8')

          const processedContent = await remark().use(html).process(fileContents)

          const content = processedContent.toString()
          return {
            id: 'some-random-uuid-id-here',
            title: 'Some Title',
            date: new Date().toISOString(),
            content: content,
            tags: [],
          }
        })
      )

      return posts as Post[]
    }

    const apiUrl = getEnv(ENV_VARS.API_URL)
    const route = ROUTES.POSTS

    const res = await fetch(`${apiUrl}${route}`)
    const data = (await res.json()) as PostData[]

    return data.map((post: PostData) => mapPost(post))
  } catch (err) {
    console.error('Error fetching posts:', err)
    return []
  }
}
