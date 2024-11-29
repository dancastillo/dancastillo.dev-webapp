import { Post } from '@/lib/api/post/post.mapper'
import Link from 'next/link'
import { randomUUID } from 'node:crypto'
import React from 'react'

const BlogPost = ({ post }: { post: Post }) => {
  const { id, title, date, tags } = post
  return (
    <li key={`card-li-${id}`} className="card group">
      <div className="flex-between">
        <p>{date}</p>
      </div>

      <div className="flex-between mt-5 gap-5">
        <div className="flex-1 text-white">
          <Link href={`/post/${id}`}>
            <p className="text-16-medium line-clamp-1 text-white">{title}</p>
          </Link>
          <div className="flex flex-wrap">
            {tags.map((tag) => (
              <h6 key={`tags-${randomUUID()}`} className="startup-care_desc pr-2">
                {tag}
              </h6>
            ))}
          </div>
        </div>
      </div>
    </li>
  )
}

export default BlogPost
