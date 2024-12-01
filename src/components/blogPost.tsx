import { Post } from '@/lib/api/post/post.mapper'
import Link from 'next/link'
import React from 'react'

const BlogPost = ({ post }: { post: Post }) => {
  const { id, title, updatedAt } = post
  return (
    <li key={`card-li-${id}`} className="card group">
      <div className="flex-between mb-2 gap-5">
        <div className="flex-1 text-white">
          <h4 className="text-2xl font-semibold line-clamp-1 text-white">{title}</h4>
        </div>
      </div>
      <div className="flex-between">
        <p>Written: {updatedAt}</p>
      </div>
      <div className="mt-2 mb-2">
        <Link
          href={`/post/${id}`}
          className="inline-block px-4 py-2 bg-blue-500 text-white font-medium rounded hover:bg-blue-600 transition"
        >
          Click to Read
        </Link>
      </div>
    </li>
  )
}

export default BlogPost
