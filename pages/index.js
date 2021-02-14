import Head from 'next/head';
import Container from '../components/container';
import NewPosts from '../components/new-posts';
import HeroPost from '../components/hero-post';
import Intro from '../components/intro';
import Layout from '../components/layout';
import { getAllPosts, getWelcomePost } from '../lib/api';

export default function Index({ welcomePost, allPosts }) {
  const heroPost = welcomePost;
  const newPosts = allPosts.filter(post => post.slug !== 'welcome').slice(0, 4);
  return (
    <>
      <Layout>
        <Head>
          <title>IzHaL Blog</title>
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {newPosts.length > 0 && <NewPosts posts={newPosts} />}
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const welcomePost = getWelcomePost();
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ]);

  return {
    props: { welcomePost, allPosts },
  };
}
