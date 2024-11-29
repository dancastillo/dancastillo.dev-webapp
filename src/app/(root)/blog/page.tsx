import BlogPost from '@/components/blogPost'
import { Post } from '@/lib/api/post/post.mapper'
import { getPosts } from '@/lib/api/post/post'

export default async function Blog() {
  const posts: Post[] = await getPosts()

  return (
    <>
      <section className="home_container">
        <h1 className="heading">Blog</h1>
      </section>

      <section className="section_container">
        <ul className="mt-7 card_grid">
          {posts.length > 0 ? (
            posts.map((post: Post) => <BlogPost key={post.id} post={post} />)
          ) : (
            <h3 className="card_h3">Coming soon...</h3>
          )}
        </ul>
      </section>
    </>
  )
}
