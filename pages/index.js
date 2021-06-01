import Head from 'next/head';
import Container from '../components/container';
import NewPosts from '../components/new-posts';
import HeroPost from '../components/hero-post';
import Intro from '../components/intro';
import Layout from '../components/layout';
import { getAllPosts, getWelcomePost } from '../lib/api';
import { BLOG_NAME, HOME_OG_IMAGE_URL } from '../lib/constants';

export default function Index({ welcomePost, allPosts }) {
  const heroPost = welcomePost;
  const newPosts = allPosts.filter(post => post.slug !== 'welcome').slice(0, 4);
  return (
    <>
      <Layout>
        <Head>
          <title>{BLOG_NAME}</title>
          <meta property="og:image" content={HOME_OG_IMAGE_URL} />
          <script
            data-ad-client="ca-pub-2184181839273814"
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          ></script>
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
