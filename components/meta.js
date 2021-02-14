import Head from 'next/head';
import { HOME_OG_IMAGE_URL } from '../lib/constants';

export default function Meta() {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#ECEFF0"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.6.0/styles/gruvbox-dark.min.css"
      />
      <meta name="msapplication-TileColor" content="#ECEFF0" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#ECEFF0" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta name="description" content="IzHaL Blog" />
      <meta property="og:image" content={HOME_OG_IMAGE_URL} />
    </Head>
  );
}
