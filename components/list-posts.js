import ListPostPreview from './list-post-preview';

export default function ListPosts({ posts }) {
  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        Posts
      </h2>
      <div className="grid grid-cols-1 md:gap-x-16 lg:gap-x-32 gap-y-9 md:gap-y-9 mb-28 divide-y-2 divide-gray-300">
        {posts.map(post => (
          <ListPostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
}
