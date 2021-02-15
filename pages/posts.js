import Head from 'next/head';
import Container from '../components/container';
import Layout from '../components/layout';
import ListPosts from '../components/list-posts';
import { getAllPosts } from '../lib/api';
import { BLOG_NAME, HOME_OG_IMAGE_URL } from '../lib/constants';

export default function Posts({ allPosts }) {
  const morePosts = allPosts;
  return (
    <>
      <Layout>
        <Head>
          <title>Posts | {BLOG_NAME}</title>
          <meta property="og:image" content={HOME_OG_IMAGE_URL} />
        </Head>
        <Container>
          <ListPosts posts={morePosts} />
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ]);

  return {
    props: { allPosts },
  };
}
