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
          content="Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS."
          name="description"
        />
        <meta property="og:url" content="https://heroicons.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Heroicons" />
        <meta
          property="og:description"
          content="Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS."
        />
        <title>Heroicons</title>
        <meta property="og:title" content="Heroicons" />
        <meta
          property="og:image"
          content={`https://heroicons.com${require('@/images/social-card.jpg').default.src}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@tailwindlabs" />
        <meta name="twitter:title" content="Heroicons" />
        <meta
          name="twitter:description"
          content="Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS."
        />
        <meta
          name="twitter:image"
          content={`https://heroicons.com${require('@/images/social-card.jpg').default.src}`}
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
