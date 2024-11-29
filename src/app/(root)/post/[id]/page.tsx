import { notFound } from 'next/navigation'
import { Post } from '@/lib/api/post/post.mapper'
import { getPosts } from '@/lib/api/post/post'

async function fetchPosts(id: string): Promise<Post | undefined> {
  const posts: Post[] = await getPosts()

  return posts.find((post) => post.id === id)
}

export default async function PostById({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const post = await fetchPosts(id)

  if (!post) {
    return notFound()
  }

  return (
    <article className="blog_article">
      <div className="prose-lg max-[767px]:prose" dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  )
}
