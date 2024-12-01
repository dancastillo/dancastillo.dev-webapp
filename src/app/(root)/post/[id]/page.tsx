import { notFound } from 'next/navigation'
import { getPostById } from '@/lib/api/post/post'
import { formatPost } from '@/lib/common/format/post-format'

export default async function PostById({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const post = await getPostById(id)

  if (!post) {
    return notFound()
  }

  const content = await formatPost(post.content)

  return (
    <div className="mt-3">
      <article className="blog_article">
        <div className="prose-lg max-[767px]:prose" dangerouslySetInnerHTML={{ __html: content }} />
      </article>
    </div>
  )
}
