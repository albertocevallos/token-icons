import Head from 'next/head'
import '@/styles/tailwind.css'
import 'focus-visible'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={require('@/images/apple-touch-icon.png').default.src}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={require('@/images/favicon-32x32.png').default.src}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={require('@/images/favicon-16x16.png').default.src}
        />
        <meta
          content="Free, up-to-date set of ERC-20 icons for your dapp."
          name="description"
        />
        <meta property="og:url" content="https://tokenicons.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Token Icons" />
        <meta
          property="og:description"
          content="Free, up-to-date set of ERC-20 icons for your dapp."
        />
        <title>Token Icons</title>
        <meta property="og:title" content="Token Icons" />
        <meta
          property="og:image"
          content={`https://tokenicons.com${
            require('@/images/social-card.jpg').default.src
          }`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@albertocevalls" />
        <meta name="twitter:title" content="Token Icons" />
        <meta
          name="twitter:description"
          content="Free, up-to-date set of ERC-20 icons for your dapp."
        />
        <meta
          name="twitter:image"
          content={`https://tokenicons.com${
            require('@/images/social-card.jpg').default.src
          }`}
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
